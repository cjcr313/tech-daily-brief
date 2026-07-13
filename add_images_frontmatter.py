import os

files = {
    "2026-07-09-bigquery-omnichannel-data-transfer-es.md": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "2026-07-10-cncf-sre-autonomous-operations-es.md": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    "2026-07-11-uk-treasury-critical-third-parties-es.md": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
}

dir_path = "/Users/walle/.openclaw/workspace/projects/tech-daily-brief/src/content/posts/"

for filename, img_url in files.items():
    filepath = os.path.join(dir_path, filename)
    with open(filepath, "r") as f:
        content = f.read()
    
    parts = content.split("---")
    if len(parts) >= 3:
        frontmatter = parts[1]
        if "ogImage:" not in frontmatter:
            # Insert before description
            frontmatter = frontmatter.replace("\ndescription:", f"\nogImage: \"{img_url}\"\ndescription:")
            parts[1] = frontmatter
            new_content = "---".join(parts)
            with open(filepath, "w") as f:
                f.write(new_content)
            print(f"Updated frontmatter {filename}")

