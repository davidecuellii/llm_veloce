#!/bin/bash
# Costruisce il pacchetto da caricare in un Progetto Claude per i soci.
# Rilancialo ogni volta che vuoi aggiornare la conoscenza del Progetto.
set -e
cd "$(dirname "$0")"
OUT="export-soci"
rm -rf "$OUT" "$OUT.zip"
mkdir -p "$OUT"

# I Progetti Claude non hanno cartelle: appiattisco i percorsi nel nome file,
# altrimenti cinque "overview.md" si sovrascrivono a vicenda.
find agenzia clients prospects concepts playbook output raw -name "*.md" 2>/dev/null | while read -r f; do
  cp "$f" "$OUT/$(echo "${f%.md}" | tr '/' '~').md"
done
cp index.md "$OUT/00-INDICE.md"
cp log.md   "$OUT/00-LOG.md"

# Niente binari (contratti, audio, docx col vecchio accesso Shopify) e niente .obsidian.
echo "Pacchetto pronto in $OUT/ — $(ls "$OUT" | wc -l | tr -d ' ') file, $(du -sh "$OUT" | cut -f1)"
zip -qr "$OUT.zip" "$OUT"
echo "Zip: $OUT.zip ($(du -h "$OUT.zip" | cut -f1))"
