const fs = require('fs');
const { execSync } = require('child_process');

const remaining = JSON.parse(fs.readFileSync('remaining.json', 'utf8'));

// Batch process 5 at a time to not overwhelm the system/CLI
for (let i = 0; i < Math.min(5, remaining.length); i++) {
    const item = remaining[i];
    const prompt = `Conceptual tech illustration: ${item.title} - ${item.desc}. High quality, vibrant colors.`;
    const safePrompt = prompt.replace(/"/g, '\\"').replace(/'/g, "'\\''");
    
    // We run openclaw infer image generate in background, wait for them to finish?
    // Using the CLI is synchronous, which is great for scripting!
    const outFileName = item.file.replace('.md', '.jpg');
    console.log(`Generating for ${item.file}...`);
    try {
        const outDir = '/Users/walle/.openclaw/media/tool-image-generation';
        // The CLI might output a random UUID name or we can specify --output
        const destPath = `${outDir}/${outFileName}`;
        execSync(`openclaw infer image generate --prompt "${safePrompt}" --size 1024x1024 --output "${destPath}"`, {stdio: 'inherit'});
        console.log(`Success: ${outFileName}`);
    } catch (e) {
        console.error(`Failed for ${item.file}`);
    }
}
