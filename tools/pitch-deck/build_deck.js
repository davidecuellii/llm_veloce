// Veloce Digital - Pitch deck per il venditore
// Palette scura Veloce: sfondo 202020, testo D6D6D6, accento FFEE32
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const Fi = require("react-icons/fi");

const BG = "202020";
const BG2 = "2A2A2A"; // card
const BG3 = "333333"; // card più chiara
const TXT = "D6D6D6";
const MUTED = "8A8A8A";
const YEL = "FFEE32";
const DARK = "202020";
const FONT = "Arial";
const W = 13.333, H = 7.5, M = 0.6;

const LOGO = fs.readFileSync("logo_mark.png").toString("base64");

async function icon(Comp, color, size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Comp, { color: "#" + color, size, strokeWidth: 1.75 })
  );
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

function pill(slide, text, x, y, w = 1.6) {
  slide.addShape("roundRect", { x, y, w, h: 0.34, fill: { color: YEL }, rectRadius: 0.17, line: { color: YEL } });
  slide.addText(text.toUpperCase(), { x, y, w, h: 0.34, fontFace: FONT, fontSize: 10, bold: true, color: DARK, align: "center", valign: "middle", margin: 0, isTextBox: true, charSpacing: 1 });
}

function chrome(slide, n, total) {
  slide.background = { color: BG };
  slide.addImage({ data: "image/png;base64," + LOGO, x: M, y: 0.42, w: 0.36, h: 0.375 });
  slide.addText("Veloce Digital", { x: M + 0.46, y: 0.42, w: 3, h: 0.375, fontFace: FONT, fontSize: 11, bold: true, color: MUTED, valign: "middle", margin: 0, isTextBox: true });
  slide.addText("@veloce_it", { x: W - M - 3, y: H - 0.65, w: 3, h: 0.3, fontFace: FONT, fontSize: 10, color: MUTED, align: "right", margin: 0, isTextBox: true });
  slide.addText(String(n).padStart(2, "0"), { x: M, y: H - 0.65, w: 1, h: 0.3, fontFace: FONT, fontSize: 10, color: MUTED, margin: 0, isTextBox: true });
}

function title(slide, text, opts = {}) {
  slide.addText(text, { x: M, y: 1.05, w: opts.w || W - 2 * M, h: opts.h || 0.9, fontFace: FONT, fontSize: opts.size || 34, bold: true, color: opts.color || "FFFFFF", valign: "top", margin: 0, isTextBox: true, lineSpacingMultiple: 0.95 });
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.author = "Veloce Digital";
  pres.title = "Veloce Digital - Pitch deck";
  const TOTAL = 14;
  let n = 0;

  // ---------- 1. COVER ----------
  {
    const s = pres.addSlide(); n++;
    s.background = { color: BG };
    s.addImage({ data: "image/png;base64," + LOGO, x: M, y: 0.9, w: 1.25, h: 1.3 });
    s.addText("Veloce Digital", { x: M, y: 2.55, w: 9, h: 0.6, fontFace: FONT, fontSize: 22, bold: true, color: MUTED, margin: 0, isTextBox: true });
    s.addText([
      { text: "Contenuti che ", options: { color: "FFFFFF" } },
      { text: "fermano", options: { color: YEL } },
      { text: " le persone.", options: { color: "FFFFFF" } },
    ], { x: M, y: 3.1, w: 11.8, h: 1.9, fontFace: FONT, fontSize: 54, bold: true, margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    s.addText("Agenzia creativa social-first. Short form, format, strategia e creative direction per brand che vogliono attenzione, non solo presenza.", { x: M, y: 5.15, w: 8.5, h: 0.9, fontFace: FONT, fontSize: 16, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    s.addText("I tuoi social in corsa con Veloce.", { x: M, y: H - 0.95, w: 6, h: 0.35, fontFace: FONT, fontSize: 12, italic: true, color: MUTED, margin: 0, isTextBox: true });
    s.addText("@veloce_it", { x: W - M - 3, y: H - 0.95, w: 3, h: 0.35, fontFace: FONT, fontSize: 12, color: MUTED, align: "right", margin: 0, isTextBox: true });
    s.addNotes("Apertura. Non partire da chi siamo: parti dal problema del cliente (slide 2 e 3). Chi siamo arriva dopo, quando ha già capito che il problema è suo.");
  }

  // ---------- 2. ATTENZIONE FRAMMENTATA ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Il contesto", M, 1.05, 1.5);
    s.addText("L'attenzione non si compra più. Si conquista ogni 47 secondi.", { x: M, y: 1.5, w: 7.2, h: 1.9, fontFace: FONT, fontSize: 34, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    s.addText([
      { text: "Nel 2004 una persona restava su uno schermo in media 2 minuti e mezzo prima di cambiare. Oggi 47 secondi.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Il tuo cliente non confronta il tuo messaggio con quello dei concorrenti. Lo confronta con tutto quello che scorre nello stesso feed: amici, creator, notizie, intrattenimento.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Chi comunica come nel 2015 non viene rifiutato. Viene semplicemente saltato.", options: { bold: true, color: "FFFFFF" } },
    ], { x: M, y: 3.5, w: 7.0, h: 2.9, fontFace: FONT, fontSize: 15, color: TXT, margin: 0, isTextBox: true, valign: "top" });

    // Stat cards a destra
    const cx = 8.3, cw = 4.4;
    s.addShape("roundRect", { x: cx, y: 1.1, w: cw, h: 2.55, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
    s.addText("47 sec", { x: cx + 0.35, y: 1.25, w: cw - 0.7, h: 1.1, fontFace: FONT, fontSize: 60, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
    s.addText("attenzione media su uno schermo prima di passare ad altro (era 150 sec nel 2004)", { x: cx + 0.35, y: 2.4, w: cw - 0.7, h: 0.75, fontFace: FONT, fontSize: 12, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    s.addText("Gloria Mark, UC Irvine, \"Attention Span\" (2023)", { x: cx + 0.35, y: 3.2, w: cw - 0.7, h: 0.3, fontFace: FONT, fontSize: 9, color: MUTED, margin: 0, isTextBox: true, italic: true });

    s.addShape("roundRect", { x: cx, y: 3.85, w: cw, h: 2.55, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
    s.addText("42,2 mln", { x: cx + 0.35, y: 4.0, w: cw - 0.7, h: 1.1, fontFace: FONT, fontSize: 60, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
    s.addText("italiani attivi sui social, il 71% della popolazione. Il tuo mercato è già lì, ogni giorno", { x: cx + 0.35, y: 5.15, w: cw - 0.7, h: 0.75, fontFace: FONT, fontSize: 12, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    s.addText("DataReportal, Digital 2025: Italy (gennaio 2025)", { x: cx + 0.35, y: 5.95, w: cw - 0.7, h: 0.3, fontFace: FONT, fontSize: 9, color: MUTED, margin: 0, isTextBox: true, italic: true });
    s.addNotes("Messaggio chiave: la concorrenza per l'attenzione non sono i competitor, è tutto il feed. Con un imprenditore usa l'esempio concreto: 'quando lei apre Instagram la sera, quanti secondi dà a un post di un'azienda?'. Con un marketing manager cita direttamente i dati.");
  }

  // ---------- 3. RICERCA: SOCIAL vs PASSAPAROLA ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "La ricerca", M, 1.05, 1.5);
    s.addText("I giovani non chiedono più in giro. Cercano sui social.", { x: M, y: 1.5, w: 5.6, h: 1.9, fontFace: FONT, fontSize: 32, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    s.addText([
      { text: "Alla Gen Z è stato chiesto: quando cerchi un'informazione su un prodotto, un posto o un servizio, dove vai per primo?", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Il social batte il motore di ricerca. E il passaparola, la fonte che per decenni ha fatto vivere le attività locali, è ultimo: 9%.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Il passaparola non è morto: si è spostato. Oggi avviene nei commenti, nei salvataggi, nei video condivisi in chat.", options: { bold: true, color: "FFFFFF" } },
    ], { x: M, y: 3.5, w: 5.4, h: 2.9, fontFace: FONT, fontSize: 14, color: TXT, margin: 0, isTextBox: true, valign: "top" });

    // Grafico nativo a barre orizzontali
    const cx = 6.6, cy = 1.1, cw = 6.1, ch = 4.6;
    s.addShape("roundRect", { x: cx, y: cy, w: cw, h: ch + 0.85, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
    s.addText("Prima fonte di informazione, Gen Z (% rispondenti)", { x: cx + 0.35, y: cy + 0.2, w: cw - 0.7, h: 0.35, fontFace: FONT, fontSize: 12, bold: true, color: "FFFFFF", margin: 0, isTextBox: true });
    const bars = [
      { l: "Social media", v: 41, c: YEL },
      { l: "Motori di ricerca", v: 32, c: "6A6A6A" },
      { l: "Strumenti AI", v: 11, c: "6A6A6A" },
      { l: "Passaparola (amici, famiglia)", v: 9, c: "6A6A6A" },
    ];
    const bx = cx + 0.35, by = cy + 0.75, bwMax = cw - 0.7 - 2.6 - 0.9, rowH = 0.95;
    bars.forEach((b, i) => {
      const y = by + i * rowH;
      s.addText(b.l, { x: bx, y, w: 2.5, h: 0.55, fontFace: FONT, fontSize: 12, color: b.c === YEL ? "FFFFFF" : TXT, bold: b.c === YEL, margin: 0, isTextBox: true, valign: "middle" });
      const bw = Math.max(0.15, bwMax * b.v / 41);
      s.addShape("rect", { x: bx + 2.6, y: y + 0.05, w: bw, h: 0.45, fill: { color: b.c }, line: { color: b.c } });
      s.addText(b.v + "%", { x: bx + 2.6 + bw + 0.12, y, w: 0.8, h: 0.55, fontFace: FONT, fontSize: 16, bold: true, color: b.c === YEL ? YEL : TXT, margin: 0, isTextBox: true, valign: "middle" });
    });
    s.addText("Fonte: Sprout Social, Q2 2025 Pulse Survey (Glimpse), 2.280 utenti social in USA, UK e Australia, aprile-maggio 2025. Gli USA anticipano di qualche anno quello che poi arriva in Italia.", { x: cx + 0.35, y: cy + ch + 0.05, w: cw - 0.7, h: 0.7, fontFace: FONT, fontSize: 9, color: MUTED, margin: 0, isTextBox: true, italic: true, valign: "top" });
    s.addNotes("Dato vero, citabile: Sprout Social 2025. Se il cliente obietta 'ma è un dato americano': gli USA sono avanti di qualche anno rispetto a noi, come su tutto il digitale. La slide successiva porta i dati italiani. Frase da usare: 'il passaparola non è morto, si è spostato dentro i social'.");
  }

  // ---------- 4. E IN ITALIA ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "E in Italia", M, 1.05, 1.5);
    s.addText("Non è una tendenza americana. Sta già succedendo qui.", { x: M, y: 1.5, w: 11, h: 0.9, fontFace: FONT, fontSize: 32, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top" });

    const cards = [
      { big: "46,7%", txt: "della Gen Z italiana dichiara che i social influenzano i suoi acquisti (non alimentari). Media nazionale: 37,4%.", src: "GS1 Italy / Metrica Ricerche" },
      { big: "72,7%", txt: "della Gen Z italiana ha comprato un prodotto passando da Instagram. È il canale d'acquisto social numero uno in Italia.", src: "GS1 Italy / Metrica Ricerche" },
      { big: "90%", txt: "della Gen Z ha fatto almeno un acquisto influenzato da un contenuto social negli ultimi sei mesi. Millennial: 84%.", src: "Sprout Social, Q2 2025 Pulse Survey" },
    ];
    const cw = (W - 2 * M - 2 * 0.35) / 3;
    cards.forEach((c, i) => {
      const x = M + i * (cw + 0.35), y = 2.65, h = 3.55;
      s.addShape("roundRect", { x, y, w: cw, h, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addText(c.big, { x: x + 0.35, y: y + 0.25, w: cw - 0.7, h: 1.1, fontFace: FONT, fontSize: 54, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
      s.addText(c.txt, { x: x + 0.35, y: y + 1.5, w: cw - 0.7, h: 1.4, fontFace: FONT, fontSize: 13, color: TXT, margin: 0, isTextBox: true, valign: "top" });
      s.addText(c.src, { x: x + 0.35, y: y + h - 0.55, w: cw - 0.7, h: 0.3, fontFace: FONT, fontSize: 9, color: MUTED, margin: 0, isTextBox: true, italic: true });
    });
    s.addText("La Gen Z oggi ha tra i 14 e i 29 anni: sono i clienti, i dipendenti e i decisori dei prossimi dieci anni. I Millennial (30-44) si comportano già quasi allo stesso modo.", { x: M, y: 6.35, w: W - 2 * M, h: 0.5, fontFace: FONT, fontSize: 12, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    s.addNotes("Questi sono dati italiani (GS1 Italy con Metrica Ricerche, ripresi da Retail Institute Italy). Con un imprenditore B2C locale il dato che colpisce è il 72,7% su Instagram. Con un B2B ricorda che i decisori di domani sono questi e che il comportamento Millennial è già simile.");
  }

  // ---------- 5. COSA CAMBIA PER CHI VENDE ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Cosa significa", M, 1.05, 1.6);
    s.addText("Se non sei sui social nel modo giusto, per una fetta crescente del mercato non esisti.", { x: M, y: 1.5, w: 11.5, h: 1.5, fontFace: FONT, fontSize: 32, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    const rows = [
      { ic: Fi.FiSearch, h: "Non ti trovano", t: "Il cliente cerca su Instagram e TikTok prima che su Google. Se lì non c'è niente, o c'è un profilo fermo al 2021, la ricerca finisce da un concorrente." },
      { ic: Fi.FiEye, h: "Non ti capiscono", t: "Un post ogni tanto, foto di prodotto e comunicati aziendali non dicono chi sei. La percezione oggi si costruisce con contenuti che qualcuno vuole guardare." },
      { ic: Fi.FiTrendingUp, h: "Non ti scelgono", t: "Chi ha già visto un brand dieci volte in un feed lo sceglie con più facilità di chi lo scopre al momento dell'acquisto. La fiducia si costruisce prima, non durante." },
    ];
    const rw = (W - 2 * M - 2 * 0.35) / 3;
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i], x = M + i * (rw + 0.35), y = 3.3;
      s.addShape("ellipse", { x, y, w: 0.7, h: 0.7, fill: { color: YEL }, line: { color: YEL } });
      s.addImage({ data: await icon(r.ic, DARK), x: x + 0.16, y: y + 0.16, w: 0.38, h: 0.38 });
      s.addText(r.h, { x, y: y + 0.9, w: rw, h: 0.5, fontFace: FONT, fontSize: 20, bold: true, color: "FFFFFF", margin: 0, isTextBox: true });
      s.addText(r.t, { x, y: y + 1.45, w: rw, h: 1.6, fontFace: FONT, fontSize: 13, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    }
    s.addNotes("Slide ponte tra i dati e l'agenzia. Adatta la parola 'cliente' all'interlocutore: per un locale è chi decide dove uscire sabato, per un'azienda B2B è il buyer o il candidato che la controlla prima di rispondere.");
  }

  // ---------- 6. CHI SIAMO ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Chi siamo", M, 1.05, 1.5);
    s.addText("Marketer e creator nella stessa stanza. Da qui nasce Veloce.", { x: M, y: 1.5, w: 7.4, h: 1.9, fontFace: FONT, fontSize: 32, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    s.addText([
      { text: "Veloce Digital è un'agenzia creativa social-first con base a Brescia. Non siamo nati come agenzia: siamo nati sulle piattaforme.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Chi qui scrive strategie e chi produce contenuti usa TikTok, Instagram e YouTube ogni giorno da più di cinque anni, da dentro. Sappiamo quando un format funziona, quando smette di funzionare e quando è ora di cambiarlo. Prima che lo dica un report.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "I social cambiano in fretta. Stare al passo, in fretta, è il nostro mestiere. Per questo ci chiamiamo Veloce.", options: { bold: true, color: "FFFFFF" } },
    ], { x: M, y: 3.5, w: 7.0, h: 3.0, fontFace: FONT, fontSize: 14, color: TXT, margin: 0, isTextBox: true, valign: "top" });

    const cx = 8.5, cw = 4.2;
    const stats = [
      { big: "650k+", t: "follower complessivi sui canali dei founder: il nostro laboratorio quotidiano" },
      { big: "5+ anni", t: "di contenuti pubblicati ogni giorno sulle piattaforme che gestiamo per i clienti" },
      { big: "2", t: "anime: marketing e advertising da una parte, creator e produzione dall'altra" },
    ];
    stats.forEach((st, i) => {
      const y = 1.1 + i * 1.8;
      s.addShape("roundRect", { x: cx, y, w: cw, h: 1.6, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addText(st.big, { x: cx + 0.3, y: y + 0.15, w: cw - 0.6, h: 0.7, fontFace: FONT, fontSize: 34, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
      s.addText(st.t, { x: cx + 0.3, y: y + 0.85, w: cw - 0.6, h: 0.65, fontFace: FONT, fontSize: 11, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    });
    s.addNotes("Argomento distintivo: non siamo un'agenzia che 'fa anche i social', siamo persone che vivono le piattaforme da creator e marketer. I 650k follower sono la prova che sappiamo catturare attenzione, non un servizio che vendiamo. Il nome Veloce viene dalla velocità con cui i social cambiano.");
  }

  // ---------- 7. TEAM ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Il team", M, 1.05, 1.5);
    s.addText("Tre persone, tre competenze che di solito stanno in tre aziende diverse.", { x: M, y: 1.5, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 30, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top" });
    const team = [
      { name: "Davide Cuelli", role: "Founder. Ingegnere informatico e content creator", t: "Strategia, hook, format e creative direction. Oltre 650k follower costruiti in prima persona su TikTok, Instagram e YouTube. Volto della campagna Geely Italia selezionata come case study da TikTok for Business.", init: "DC" },
      { name: "Gabriel Palamini", role: "Responsabile marketing e grafico", t: "Marketing, advertising e identità visiva. Traduce l'obiettivo di business in piano, campagne e materiali: dal funnel alla grafica che lo sostiene.", init: "GP" },
      { name: "Matteo Campanella", role: "Videomaker e content strategist", t: "Produzione video e strategia dei contenuti. Riprese, montaggio e ritmo: la parte che decide se un video viene guardato fino alla fine o saltato al secondo due.", init: "MC" },
    ];
    const cw = (W - 2 * M - 2 * 0.35) / 3;
    team.forEach((p, i) => {
      const x = M + i * (cw + 0.35), y = 2.65, h = 3.7;
      s.addShape("roundRect", { x, y, w: cw, h, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addShape("ellipse", { x: x + 0.35, y: y + 0.35, w: 0.9, h: 0.9, fill: { color: YEL }, line: { color: YEL } });
      s.addText(p.init, { x: x + 0.35, y: y + 0.35, w: 0.9, h: 0.9, fontFace: FONT, fontSize: 20, bold: true, color: DARK, align: "center", valign: "middle", margin: 0, isTextBox: true });
      s.addText(p.name, { x: x + 0.35, y: y + 1.45, w: cw - 0.7, h: 0.4, fontFace: FONT, fontSize: 18, bold: true, color: "FFFFFF", margin: 0, isTextBox: true });
      s.addText(p.role, { x: x + 0.35, y: y + 1.85, w: cw - 0.7, h: 0.5, fontFace: FONT, fontSize: 11, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "top" });
      s.addText(p.t, { x: x + 0.35, y: y + 2.4, w: cw - 0.7, h: 1.2, fontFace: FONT, fontSize: 11, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    });
    s.addNotes("I cerchi con le iniziali sono segnaposto: sostituire con le foto dei tre soci (formato quadrato, sfondo scuro). Con un cliente strutturato sottolinea che il team copre strategia, produzione e ADV senza fornitori esterni.");
  }

  // ---------- 8. ECOSISTEMA 360 ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Cosa facciamo", M, 1.05, 1.6);
    s.addText("Un ecosistema completo, con il social al centro.", { x: M, y: 1.5, w: 5.2, h: 1.5, fontFace: FONT, fontSize: 32, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    s.addText([
      { text: "Non vendiamo 'gestione social'. Costruiamo il sistema che parte dal contenuto e arriva al risultato: attenzione, percezione, richieste, vendite.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Il cuore è lo short form: video brevi, format riconoscibili, contenuti che le persone scelgono di guardare. Intorno, tutto quello che serve perché quell'attenzione diventi business.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Si parte da dove serve al cliente, non dal pacchetto completo.", options: { bold: true, color: "FFFFFF" } },
    ], { x: M, y: 3.1, w: 5.0, h: 3.2, fontFace: FONT, fontSize: 13, color: TXT, margin: 0, isTextBox: true, valign: "top" });

    // Centro + anello di servizi
    const ccx = 9.55, ccy = 3.95, R = 1.9;
    const services = [
      { ic: Fi.FiCompass, t: "Strategia\ncontenuti" },
      { ic: Fi.FiPenTool, t: "Creative\ndirection" },
      { ic: Fi.FiCamera, t: "Shooting e\nproduzione" },
      { ic: Fi.FiTarget, t: "ADV e\ncampagne" },
      { ic: Fi.FiShoppingBag, t: "TikTok Shop" },
      { ic: Fi.FiLayout, t: "Landing e\nfunnel" },
      { ic: Fi.FiUsers, t: "UGC e\ncreator" },
      { ic: Fi.FiMusic, t: "Eventi e\nnightlife" },
    ];
    for (let i = 0; i < services.length; i++) {
      const a = -Math.PI / 2 + i * (2 * Math.PI / services.length);
      const px = ccx + R * Math.cos(a), py = ccy + R * Math.sin(a);
      s.addShape("line", { x: ccx, y: ccy, w: px - ccx, h: py - ccy, line: { color: BG3, width: 1.5 }, flipH: px < ccx, flipV: py < ccy });
    }
    s.addShape("ellipse", { x: ccx - 0.95, y: ccy - 0.95, w: 1.9, h: 1.9, fill: { color: YEL }, line: { color: YEL } });
    s.addText("Short form\ne format", { x: ccx - 0.95, y: ccy - 0.95, w: 1.9, h: 1.9, fontFace: FONT, fontSize: 14, bold: true, color: DARK, align: "center", valign: "middle", margin: 0, isTextBox: true });
    for (let i = 0; i < services.length; i++) {
      const a = -Math.PI / 2 + i * (2 * Math.PI / services.length);
      const px = ccx + R * Math.cos(a), py = ccy + R * Math.sin(a);
      s.addShape("ellipse", { x: px - 0.36, y: py - 0.36, w: 0.72, h: 0.72, fill: { color: BG3 }, line: { color: BG3 } });
      s.addImage({ data: await icon(services[i].ic, YEL), x: px - 0.19, y: py - 0.19, w: 0.38, h: 0.38 });
      // etichetta esterna
      const lx = ccx + (R + 0.95) * Math.cos(a), ly = ccy + (R + 0.75) * Math.sin(a);
      s.addText(services[i].t, { x: lx - 0.75, y: ly - 0.3, w: 1.5, h: 0.6, fontFace: FONT, fontSize: 10, bold: true, color: TXT, align: "center", valign: "middle", margin: 0, isTextBox: true });
    }
    s.addNotes("Il grafico è il '360 gradi': tutto ruota attorno allo short form. Con un cliente che parte da zero racconta solo il centro più due o tre satelliti (strategia, produzione, eventualmente ADV). Con un marketing manager mostra l'intero anello e chiedi quali pezzi ha già coperti internamente.");
  }

  // ---------- 9. METODO ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Come lavoriamo", M, 1.05, 1.7);
    s.addText("Non partiamo dal reel. Partiamo da come guadagni.", { x: M, y: 1.5, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 32, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top" });
    const steps = [
      { n: "1", h: "Business", t: "Capiamo come l'attività guadagna, dove perde soldi e quale cliente vale di più." },
      { n: "2", h: "Obiettivo", t: "Scegliamo un obiettivo di comunicazione misurabile: notorietà, percezione o vendite." },
      { n: "3", h: "Format", t: "Progettiamo pochi format replicabili, con hook e linguaggio tarati sul pubblico." },
      { n: "4", h: "Produzione", t: "Giriamo, montiamo e pubblichiamo con un ritmo costante. Senza dipendere dal cliente." },
      { n: "5", h: "Misura", t: "Leggiamo i dati ogni settimana e cambiamo quello che non funziona. In fretta." },
    ];
    const gap = 0.25, cw = (W - 2 * M - 4 * gap) / 5;
    steps.forEach((st, i) => {
      const x = M + i * (cw + gap), y = 2.75, h = 3.35;
      s.addShape("roundRect", { x, y, w: cw, h, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addText(st.n, { x: x + 0.3, y: y + 0.25, w: cw - 0.6, h: 0.9, fontFace: FONT, fontSize: 48, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
      s.addText(st.h, { x: x + 0.3, y: y + 1.3, w: cw - 0.6, h: 0.45, fontFace: FONT, fontSize: 18, bold: true, color: "FFFFFF", margin: 0, isTextBox: true });
      s.addText(st.t, { x: x + 0.3, y: y + 1.85, w: cw - 0.6, h: 1.4, fontFace: FONT, fontSize: 13, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    });
    s.addText("Il punto 1 è quello che quasi nessuna agenzia fa. Ed è quello che decide se i contenuti servono a qualcosa.", { x: M, y: 6.45, w: W - 2 * M, h: 0.4, fontFace: FONT, fontSize: 12, italic: true, color: MUTED, margin: 0, isTextBox: true });
    s.addNotes("Con un imprenditore fermati sul punto 1: 'prima di girare un video vogliamo capire cosa le fa guadagnare'. È la frase che ci distingue dal social media manager. Con un marketing manager sottolinea il punto 5: ciclo settimanale, non report trimestrale.");
  }

  // ---------- 10. MODULARE SULL'OBIETTIVO ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Su misura", M, 1.05, 1.5);
    s.addText("Stesso metodo, tre obiettivi. Cambiano pubblico, linguaggio e misura.", { x: M, y: 1.5, w: 11.8, h: 0.9, fontFace: FONT, fontSize: 30, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top" });
    const cols = [
      { ic: Fi.FiRadio, h: "Farsi conoscere", sub: "Notorietà", rows: [
        ["Per chi", "Brand nuovi, aperture, lanci, chi è forte sul prodotto ma invisibile online."],
        ["Pubblico", "Ampio, freddo, non ti cerca. Va fermato mentre scorre."],
        ["Linguaggio", "Semplice, diretto, intrattenimento prima dell'informazione."],
        ["Cosa facciamo", "Format virali, short form ad alto volume, trend, eventi."],
        ["Come misuriamo", "Visualizzazioni, reach, follower in target, condivisioni."],
      ]},
      { ic: Fi.FiAward, h: "Farsi scegliere", sub: "Percezione e autorevolezza", rows: [
        ["Per chi", "Aziende già note, premium, B2B, chi deve giustificare un prezzo."],
        ["Pubblico", "Tiepido: ti conosce, non ha ancora deciso. Studia prima di comprare."],
        ["Linguaggio", "Più tecnico e più profondo, competenza mostrata, non dichiarata."],
        ["Cosa facciamo", "Format di contenuto esperto, dietro le quinte, casi, founder-led."],
        ["Come misuriamo", "Retention, salvataggi, tempo di visione, qualità dei contatti."],
      ]},
      { ic: Fi.FiShoppingCart, h: "Far comprare", sub: "Lead e vendite", rows: [
        ["Per chi", "E-commerce, TikTok Shop, locali, servizi con un'offerta chiara."],
        ["Pubblico", "Caldo: ti conosce e ha un bisogno. Va spinto a decidere."],
        ["Linguaggio", "Concreto: offerta, prova, urgenza, invito all'azione esplicito."],
        ["Cosa facciamo", "Creativi ADV, UGC, landing e funnel, TikTok Shop, retargeting."],
        ["Come misuriamo", "Richieste, ordini, costo per contatto, ritorno sulla spesa."],
      ]},
    ];
    const cw = (W - 2 * M - 2 * 0.3) / 3;
    for (let i = 0; i < cols.length; i++) {
      const c = cols[i], x = M + i * (cw + 0.3), y = 2.6, h = 3.5;
      s.addShape("roundRect", { x, y, w: cw, h, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addShape("ellipse", { x: x + 0.3, y: y + 0.25, w: 0.55, h: 0.55, fill: { color: YEL }, line: { color: YEL } });
      s.addImage({ data: await icon(c.ic, DARK), x: x + 0.43, y: y + 0.38, w: 0.29, h: 0.29 });
      s.addText(c.h, { x: x + 1.0, y: y + 0.22, w: cw - 1.3, h: 0.35, fontFace: FONT, fontSize: 17, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "middle" });
      s.addText(c.sub, { x: x + 1.0, y: y + 0.55, w: cw - 1.3, h: 0.3, fontFace: FONT, fontSize: 10, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
      const runs = [];
      c.rows.forEach((r, k) => {
        runs.push({ text: r[0].toUpperCase() + "  ", options: { bold: true, color: MUTED, fontSize: 9, charSpacing: 1 } });
        runs.push({ text: r[1], options: { color: TXT, fontSize: 12, breakLine: k < c.rows.length - 1, paraSpaceAfter: 7 } });
      });
      s.addText(runs, { x: x + 0.3, y: y + 1.0, w: cw - 0.6, h: h - 1.15, fontFace: FONT, margin: 0, isTextBox: true, valign: "top" });
    }
    s.addText("Molti clienti hanno bisogno di due colonne insieme. Si parte dalla più urgente.", { x: M, y: 6.3, w: W - 2 * M, h: 0.35, fontFace: FONT, fontSize: 11, italic: true, color: MUTED, margin: 0, isTextBox: true });
    s.addNotes("Slide chiave per modulare il discorso. Prima di aprirla, chiedi: 'oggi il suo problema è che non la conoscono, che non la scelgono, o che non comprano?'. Poi racconta solo la colonna giusta, con il linguaggio di quella colonna: semplice per la prima, più tecnico per la seconda, numeri e offerta per la terza. Le altre due colonne restano come 'dove si può andare dopo'.");
  }

  // ---------- 11. CASE GEELY ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Case study", M, 1.05, 1.5);
    s.addText("Geely Italia: il lancio di un brand auto, raccontato come un video nativo.", { x: M, y: 1.5, w: 7.2, h: 1.5, fontFace: FONT, fontSize: 28, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    s.addText([
      { text: "Per l'ingresso di Geely in Italia serviva comunicare l'offerta \"garanzia a vita\" per i primi 1.000 clienti a un pubblico che non conosceva il marchio.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Veloce Digital ha ideato script, girato e montato il video, con Davide come volto, in un formato nativo e non promozionale. Distribuito in Spark Ads dal profilo di Davide dentro la campagna di lancio impostata tramite TikTok One, che TikTok for Business ha poi scelto come case study ufficiale.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "\"La piattaforma si è dimostrata un forte motore non solo di awareness ed engagement, ma anche di risultati di business concreti.\"", options: { italic: true, color: "FFFFFF", breakLine: true } },
      { text: "Marco Santucci, CEO Geely Italia", options: { color: MUTED, fontSize: 11 } },
    ], { x: M, y: 3.1, w: 7.0, h: 3.3, fontFace: FONT, fontSize: 13, color: TXT, margin: 0, isTextBox: true, valign: "top" });

    const cx = 8.3, cw = 4.4;
    const stats = [
      { big: "12 mln", t: "impression generate dalla campagna" },
      { big: "3,85 €", t: "CPM: costo per mille visualizzazioni, contro medie di settore ben più alte" },
      { big: "9,20 €", t: "costo per lead, in un settore dove un contatto auto costa molto di più" },
    ];
    stats.forEach((st, i) => {
      const y = 1.1 + i * 1.5;
      s.addShape("roundRect", { x: cx, y, w: cw, h: 1.32, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addText(st.big, { x: cx + 0.3, y: y + 0.12, w: 1.9, h: 1.08, fontFace: FONT, fontSize: 30, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
      s.addText(st.t, { x: cx + 2.25, y: y + 0.12, w: cw - 2.55, h: 1.08, fontFace: FONT, fontSize: 11, color: TXT, margin: 0, isTextBox: true, valign: "middle" });
    });
    s.addText("Risultati della campagna Geely Italia su TikTok. Il traguardo dei primi 1.000 clienti con garanzia a vita è stato raggiunto durante la campagna.", { x: cx, y: 5.6, w: cw, h: 0.6, fontFace: FONT, fontSize: 11, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top" });
    s.addText("Fonte: ads.tiktok.com/business, \"Geely Italia success story, TikTok One\"", { x: cx, y: 6.2, w: cw, h: 0.3, fontFace: FONT, fontSize: 9, italic: true, color: MUTED, margin: 0, isTextBox: true });
    s.addNotes("Caso pubblico, verificabile sul sito TikTok for Business. Raccontalo come lavoro di agenzia: script, riprese e montaggio sono di Veloce Digital, Davide è il volto. I numeri sono della campagna (gestita da Social & Impact via TikTok One), non del singolo video: dillo così, è verificabile nell'articolo. Punto da sottolineare con chi fa marketing: CPM 3,85 € e lead a 9,20 € nell'automotive. Con un imprenditore: 'un contenuto che non sembra pubblicità ha fatto vendere auto'.");
  }

  // ---------- 12. CASE PAKORABAN ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Case study", M, 1.05, 1.5);
    s.addText("Pakoraban: il locale visto da tutta Brescia. Sold out all'apertura.", { x: M, y: 1.5, w: 7.2, h: 1.5, fontFace: FONT, fontSize: 28, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top", lineSpacingMultiple: 0.95 });
    s.addText([
      { text: "Punto di partenza: un locale con una comunicazione che non funzionava e un'apertura da riempire.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "In 90 giorni abbiamo costruito un sistema di contenuti: format riconoscibili, ritmo di pubblicazione costante, hook pensati per il pubblico della città. Tutto organico, senza un euro di ADV.", options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Il risultato non sono state solo le visualizzazioni: sono state le persone in fila la sera dell'apertura.", options: { bold: true, color: "FFFFFF" } },
    ], { x: M, y: 3.1, w: 7.0, h: 3.0, fontFace: FONT, fontSize: 13, color: TXT, margin: 0, isTextBox: true, valign: "top" });

    const cx = 8.3, cw = 4.4, gap = 0.25, bw = (cw - gap) / 2, bh = 2.45;
    const stats = [
      { big: "3 mln+", t: "visualizzazioni in 90 giorni" },
      { big: "+23.000", t: "follower in target" },
      { big: "300+", t: "richieste generate" },
      { big: "SOLD OUT", t: "all'apertura, senza ADV", small: true },
    ];
    stats.forEach((st, i) => {
      const x = cx + (i % 2) * (bw + gap), y = 1.1 + Math.floor(i / 2) * (bh + gap);
      s.addShape("roundRect", { x, y, w: bw, h: bh, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addText(st.big, { x: x + 0.25, y: y + 0.3, w: bw - 0.5, h: 1.0, fontFace: FONT, fontSize: st.small ? 21 : 30, bold: true, color: YEL, margin: 0, isTextBox: true, valign: "middle" });
      s.addText(st.t, { x: x + 0.25, y: y + 1.35, w: bw - 0.5, h: 0.9, fontFace: FONT, fontSize: 12, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    });
    s.addNotes("Caso locale, perfetto per ristoranti, bar, negozi e attività di Brescia e provincia. La frase da usare: 'zero ADV, solo contenuti fatti bene, e la sera dell'apertura era pieno'. Se il cliente è un'attività locale, questa slide vale più della Geely.");
  }

  // ---------- 13. PERCHÉ VELOCE ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Perché noi", M, 1.05, 1.5);
    s.addText("Quattro cose che le agenzie di solito non fanno.", { x: M, y: 1.5, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 32, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top" });
    const items = [
      { ic: Fi.FiZap, h: "Viviamo le piattaforme", t: "Non le studiamo dai report: le usiamo ogni giorno da più di cinque anni, da creator. Vediamo i cambi di algoritmo e di format prima che diventino articoli." },
      { ic: Fi.FiDollarSign, h: "Business prima dei contenuti", t: "Prima di girare un video vogliamo capire come guadagni e dove perdi. I contenuti vanno dove c'è margine, non dove è più facile filmare." },
      { ic: Fi.FiFastForward, h: "Veloci per natura", t: "Ciclo settimanale di produzione, lettura dati e correzione. Quello che non funziona cambia in giorni, non a fine trimestre." },
      { ic: Fi.FiXCircle, h: "Niente numeri di facciata", t: "Non vendiamo follower né 'engagement'. Vendiamo attenzione, percezione e opportunità commerciali. Se un obiettivo non ha senso, lo diciamo prima." },
    ];
    const cw = (W - 2 * M - 0.35) / 2, ch = 1.7;
    for (let i = 0; i < items.length; i++) {
      const it = items[i], x = M + (i % 2) * (cw + 0.35), y = 2.65 + Math.floor(i / 2) * (ch + 0.3);
      s.addShape("roundRect", { x, y, w: cw, h: ch, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addShape("ellipse", { x: x + 0.3, y: y + 0.3, w: 0.6, h: 0.6, fill: { color: YEL }, line: { color: YEL } });
      s.addImage({ data: await icon(it.ic, DARK), x: x + 0.44, y: y + 0.44, w: 0.32, h: 0.32 });
      s.addText(it.h, { x: x + 1.1, y: y + 0.25, w: cw - 1.4, h: 0.4, fontFace: FONT, fontSize: 17, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "middle" });
      s.addText(it.t, { x: x + 1.1, y: y + 0.7, w: cw - 1.4, h: 0.95, fontFace: FONT, fontSize: 11.5, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    }
    s.addNotes("Slide da usare se il cliente sta confrontando più agenzie. Con un imprenditore la prima e la seconda card sono le più forti. Con un marketing manager la terza e la quarta.");
  }

  // ---------- 14. PROSSIMO PASSO ----------
  {
    const s = pres.addSlide(); n++;
    chrome(s, n, TOTAL);
    pill(s, "Prossimo passo", M, 1.05, 1.8);
    s.addText("Una call, una proposta concreta. Gratis.", { x: M, y: 1.5, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 34, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "top" });
    s.addText("Nessun impegno e nessun pacchetto standard. Prima capiamo l'attività, poi diciamo cosa faremmo e perché.", { x: M, y: 2.4, w: 9, h: 0.5, fontFace: FONT, fontSize: 14, color: TXT, margin: 0, isTextBox: true });
    const steps = [
      { n: "1", h: "Call conoscitiva", t: "30-45 minuti con il team Veloce Digital. Parliamo di come lavora l'attività, di cosa vende meglio e di cosa oggi non funziona nella comunicazione." },
      { n: "2", h: "Analisi e proposta", t: "Guardiamo i canali attuali, il pubblico e i concorrenti. Torniamo con una proposta su misura: obiettivo, format possibili, piano di lavoro." },
      { n: "3", h: "Si decide insieme", t: "La proposta è una consulenza gratuita: resta al cliente anche se non si prosegue. Se si parte, si parte con un piano già chiaro." },
    ];
    const cw = (W - 2 * M - 2 * 0.35) / 3;
    steps.forEach((st, i) => {
      const x = M + i * (cw + 0.35), y = 3.15, h = 2.45;
      s.addShape("roundRect", { x, y, w: cw, h, fill: { color: BG2 }, line: { color: BG2 }, rectRadius: 0.12 });
      s.addShape("ellipse", { x: x + 0.3, y: y + 0.3, w: 0.6, h: 0.6, fill: { color: YEL }, line: { color: YEL } });
      s.addText(st.n, { x: x + 0.3, y: y + 0.3, w: 0.6, h: 0.6, fontFace: FONT, fontSize: 18, bold: true, color: DARK, align: "center", valign: "middle", margin: 0, isTextBox: true });
      s.addText(st.h, { x: x + 1.05, y: y + 0.3, w: cw - 1.35, h: 0.6, fontFace: FONT, fontSize: 17, bold: true, color: "FFFFFF", margin: 0, isTextBox: true, valign: "middle" });
      s.addText(st.t, { x: x + 0.3, y: y + 1.05, w: cw - 0.6, h: 1.3, fontFace: FONT, fontSize: 11.5, color: TXT, margin: 0, isTextBox: true, valign: "top" });
    });
    // Contatti
    s.addShape("roundRect", { x: M, y: 5.85, w: W - 2 * M, h: 0.85, fill: { color: YEL }, line: { color: YEL }, rectRadius: 0.12 });
    s.addText([
      { text: "Veloce Digital   ", options: { bold: true } },
      { text: "WhatsApp 331 204 3165   ·   Instagram @veloce_it   ·   Brescia", options: {} },
    ], { x: M + 0.35, y: 5.85, w: W - 2 * M - 0.7, h: 0.85, fontFace: FONT, fontSize: 15, color: DARK, margin: 0, isTextBox: true, valign: "middle" });
    s.addNotes("Chiusura: chiedi una data per la call, non 'ci sentiamo'. Proponi due slot. Il vantaggio per il cliente è che la proposta con i format resta sua anche se non prosegue: è una consulenza gratuita. I contatti sul banner vanno aggiornati se cambiano.");
  }

  await pres.writeFile({ fileName: "Veloce_Digital_Pitch_Deck.pptx" });
  console.log("written");
}
main().catch((e) => { console.error(e); process.exit(1); });
