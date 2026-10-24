# Nuova variante / nuovo cliente
1. Cliente nuovo: aggiungi la palette in `src/brand.ts` (BRANDS) e passa `brand` nelle defaultProps in `src/Root.tsx`.
2. Nuova animazione: aggiungi un componente in `src/anims.tsx` (usa Sticker/Eye/usePop da `src/kit.tsx`) e una riga in LIST di `src/Root.tsx` (id kebab-case, secondi).
3. Render: `OUT_DIR="<cartella>" scripts/renderizza.sh <id> <secondi|loop>` (ProRes 4444, 1080x1920, 30fps, alpha premoltiplicato).
4. File gia' renderizzato: `scripts/premoltiplica.sh file.mov`.

# Adastra (sorgenti in src/adastra.tsx e src/adastraRoot.tsx)
Palette: solo #0A0A0A / #FFFFFF / #5C5C5C (grigio solo testi secondari). Font Creato Display (public/). Render: `scripts/renderizza-adastra.sh <cartella> <id...>`. Tempi del V1 in src/adastraRoot.tsx (TIMED).
