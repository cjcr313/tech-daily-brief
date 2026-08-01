const fs = require('fs');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const remaining = JSON.parse(fs.readFileSync('remaining.json', 'utf8')).slice(5);
const CONCURRENCY = 10;
const outDir = '/Users/walle/.openclaw/media/tool-image-generation';

async function processQueue(items) {
    let index = 0;
    
    async function worker() {
        while (index < items.length) {
            const item = items[index++];
            const prompt = `Conceptual tech illustration: ${item.title} - ${item.desc}. High quality, vibrant colors.`;
            const safePrompt = prompt.replace(/"/g, '\\"').replace(/'/g, "'\\''");
            const outFileName = item.file.replace('.md', '.jpg');
            const destPath = `${outDir}/${outFileName}`;
            
            console.log(`Starting: ${item.file}`);
            try {
                await execPromise(`openclaw infer image generate --prompt "${safePrompt}" --size 1024x1024 --output "${destPath}"`);
                console.log(`Success: ${item.file}`);
            } catch (e) {
                console.error(`Failed: ${item.file}`);
            }
        }
    }
    
    const workers = [];
    for (let i = 0; i < CONCURRENCY; i++) {
        workers.push(worker());
    }
    await Promise.all(workers);
}

processQueue(remaining).then(() => {
    console.log("All done generating images.");
});
