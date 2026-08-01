const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'content', 'posts');
const placeholderPath = '../../assets/images/placeholder.jpg'; // We'll need to create this image

fs.readdir(postsDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    if (file.endsWith('.md')) {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');

      if (!content.includes('ogImage:') && !content.includes('![')) {
        // Insert the placeholder image right after the frontmatter ends
        const updatedContent = content.replace(
          /^---\n(.*?)\n---\n/ms,
          `---\n$1\n---\n\n![Placeholder](${placeholderPath})\n\n`
        );
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  });
  console.log("Finished updating files.");
});
