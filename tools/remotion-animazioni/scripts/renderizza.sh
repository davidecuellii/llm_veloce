#!/bin/bash
# Uso: renderizza.sh <variante> <secondi|loop>   (OUT_DIR per cambiare cartella, default ./out)
set -e
cd "$(dirname "$0")/.."
V="$1"; D="${2:-loop}"; OUT="${OUT_DIR:-out}"; mkdir -p "$OUT"
if [ "$D" = "loop" ]; then SFX=loop; FR=""; else SFX="${D}s"; FR="--frames=0-$(( D * 30 - 1 ))"; fi
FILE="$OUT/$V-$SFX.mov"
npx remotion render src/index.ts "$V" "$FILE" --codec=prores --prores-profile=4444 \
  --pixel-format=yuva444p10le --image-format=png $FR
scripts/premoltiplica.sh "$FILE"
