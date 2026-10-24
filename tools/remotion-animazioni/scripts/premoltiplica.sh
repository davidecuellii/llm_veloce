#!/bin/bash
# Uso: premoltiplica.sh <file.mov>  -> sovrascrive il file con alpha premoltiplicato (ProRes 4444)
set -e
F="$1"; [ -f "$F" ] || { echo "file non trovato: $F"; exit 1; }
T="${F%.mov}.pm.mov"
/opt/homebrew/bin/ffmpeg -v error -y -i "$F" -vf "format=yuva444p10le,premultiply=inplace=1" \
  -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -vendor apl0 -an "$T"
mv "$T" "$F"; echo "premoltiplicato: $F"
