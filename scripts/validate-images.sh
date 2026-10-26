#!/bin/bash
# Valida que toda imagen referenciada en los posts exista; si no, reemplaza por placeholder.
cd "$(dirname "$0")/.."
FIXED=0
for md in src/content/posts/*.md; do
  for ref in $(grep -oE '\.\./\.\./assets/images/[A-Za-z0-9._-]+\.(jpg|jpeg|png|webp|avif)' "$md" | sort -u); do
    f="src/assets/images/${ref##*/}"
    if [ ! -f "$f" ]; then
      echo "FIX: ${md##*/} -> ${ref##*/} no existe, usando placeholder"
      sed -i '' "s|$ref|../../assets/images/placeholder.jpg|g" "$md"
      FIXED=$((FIXED+1))
    fi
  done
done
if [ $FIXED -gt 0 ]; then echo "$FIXED referencia(s) reparada(s)"; else echo "OK: todas las referencias existen"; fi
