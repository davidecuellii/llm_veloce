#!/bin/bash
# Uso: renderizza-adastra.sh <cartella_out> <id> [id...]  (ProRes 4444 con alpha premoltiplicato, 1080x1920, 30 fps)
set -e
cd "$(dirname "$0")/.."
OUT="$1"; shift; mkdir -p "$OUT"
for ID in "$@"; do
  FILE="$OUT/$ID.mov"
  npx remotion render src/index.ts "$ID" "$FILE" --codec=prores --prores-profile=4444 --pixel-format=yuva444p10le --image-format=png --log=error
  scripts/premoltiplica.sh "$FILE"
done
