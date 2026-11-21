#!/bin/bash
# Valida que toda imagen referenciada en los posts exista; si no, intenta .webp o usa placeholder.
cd "$(dirname "$0")/.."
FIXED=0
FALLBACK="placeholder.webp"
[ -f "src/assets/images/$FALLBACK" ] || FALLBACK="placeholder.jpg"

for md in src/content/posts/*.md; do
  for ref in $(grep -oE '\.\./\.\./assets/images/[A-Za-z0-9._-]+\.(jpg|jpeg|png|webp|avif)' "$md" | sort -u); do
    name="${ref##*/}"
    f="src/assets/images/$name"
    if [ ! -f "$f" ]; then
      webp_name="${name%.*}.webp"
      if [ -f "src/assets/images/$webp_name" ]; then
        echo "FIX: ${md##*/} -> $name -> $webp_name"
        sed -i.bak "s|$ref|../../assets/images/$webp_name|g" "$md" && rm -f "$md.bak"
      else
        echo "FIX: ${md##*/} -> $name no existe, usando $FALLBACK"
        sed -i.bak "s|$ref|../../assets/images/$FALLBACK|g" "$md" && rm -f "$md.bak"
      fi
      FIXED=$((FIXED+1))
    fi
  done
done
if [ $FIXED -gt 0 ]; then echo "$FIXED referencia(s) reparada(s)"; else echo "OK: todas las referencias existen"; fi
