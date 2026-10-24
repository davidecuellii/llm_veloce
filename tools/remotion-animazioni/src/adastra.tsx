import React from 'react';
import {Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

// Brand Adastra: solo nero, bianco e grigio (grigio solo per testi secondari). Font Creato Display.
export const C = {black: '#0A0A0A', white: '#FFFFFF', grey: '#5C5C5C'};
const F = 'Creato Display';
const fontCss = [['Regular', 400], ['Medium', 500], ['Bold', 700], ['ExtraBold', 800]]
  .map(([n, w]) => `@font-face{font-family:'${F}';font-weight:${w};src:url(${staticFile(`CreatoDisplay-${n}.otf`)});}`).join('');

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const EASE = Easing.bezier(0.2, 0.8, 0.2, 1);
export const ease = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], {...clamp, easing: EASE});
export const useOut = (n = 9) => {
  const f = useCurrentFrame(); const {durationInFrames} = useVideoConfig();
  return interpolate(f, [durationInFrames - n, durationInFrames - 1], [1, 0], clamp);
};

export const Stage: React.FC<{children: React.ReactNode; fade?: boolean}> = ({children, fade = true}) => {
  const o = useOut(); const f = useCurrentFrame();
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', fontFamily: `'${F}'`, fontWeight: 500, opacity: fade ? o : 1}}>
      <style>{fontCss}</style>
      {children}
    </div>
  );
};

// Entra salendo e sfumando.
const rise = (f: number, d: number, dist = 36) => {
  const t = ease(f, d, d + 16); return {opacity: t, transform: `translateY(${(1 - t) * dist}px)`};
};

type CardP = {x?: number; y: number; w?: number; dark?: boolean; delay?: number; children: React.ReactNode; pad?: string; style?: React.CSSProperties};
const Card: React.FC<CardP> = ({x, y, w = 920, dark, delay = 0, children, pad = '26px 34px', style}) => {
  const f = useCurrentFrame();
  return (
    <div style={{
      position: 'absolute', top: y, left: x ?? (1080 - w) / 2, width: w, boxSizing: 'border-box', padding: pad,
      background: dark ? C.black : C.white, color: dark ? C.white : C.black, borderRadius: 22,
      boxShadow: '0 18px 46px rgba(10,10,10,0.38)', ...rise(f, delay), ...style,
    }}>{children}</div>
  );
};

const Word: React.FC<{t: string; d: number}> = ({t, d}) => {
  const f = useCurrentFrame(); const k = ease(f, d, d + 12);
  return <span style={{display: 'inline-block', opacity: k, transform: `translateY(${(1 - k) * 22}px)`, marginRight: '0.28em'}}>{t}</span>;
};
const Words: React.FC<{text: string; d?: number; step?: number}> = ({text, d = 0, step = 3}) =>
  <>{text.split(' ').map((w, i) => <Word key={i} t={w} d={d + i * step}/>)}</>;

const Pill: React.FC<{children: React.ReactNode; dark?: boolean; y: number; x?: number; delay?: number; size?: number}> = ({children, dark, y, x, delay = 0, size = 30}) => {
  const f = useCurrentFrame();
  return <div style={{
    position: 'absolute', top: y, left: x ?? 80, display: 'flex', alignItems: 'center', gap: 14, padding: '10px 22px',
    background: dark ? C.black : C.white, color: dark ? C.white : C.black, borderRadius: 999, fontSize: size, fontWeight: 700,
    boxShadow: '0 10px 28px rgba(10,10,10,0.35)', ...rise(f, delay, 24),
  }}>{children}</div>;
};

const Icon: React.FC<{name: 'spazio' | 'allestimento' | 'persone' | 'trasferte' | 'contatto' | 'stand' | 'euro' | 'pin' | 'cal' | 'card'; s?: number; c?: string; draw?: number}> = ({name, s = 64, c = C.black, draw = 1}) => {
  const sw = 5; const dash = {strokeDasharray: 300, strokeDashoffset: 300 * (1 - draw)};
  const p = {fill: 'none', stroke: c, strokeWidth: sw, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, ...dash};
  const g = {
    spazio: <><rect x="14" y="14" width="72" height="72" rx="6" {...p}/><path d="M14 50H50V86" {...p}/></>,
    allestimento: <><path d="M10 84H90M22 84V40L50 20L78 40V84" {...p}/><rect x="40" y="56" width="20" height="28" {...p}/></>,
    persone: <><circle cx="50" cy="32" r="16" {...p}/><path d="M18 88C18 64 82 64 82 88" {...p}/></>,
    trasferte: <><circle cx="22" cy="72" r="8" {...p}/><circle cx="78" cy="28" r="8" {...p}/><path d="M30 72H56C70 72 70 50 56 50H44C30 50 30 28 44 28H70" {...p}/></>,
    contatto: <><circle cx="50" cy="36" r="15" {...p}/><path d="M22 84C22 60 78 60 78 84" {...p}/></>,
    stand: <><path d="M12 84H88M20 84V36H80V84M12 36L50 14L88 36" {...p}/><path d="M38 84V58H62V84" {...p}/></>,
    euro: <><circle cx="50" cy="50" r="38" {...p}/><path d="M64 36C52 26 36 32 36 50C36 68 52 74 64 64M28 46H58M28 56H58" {...p}/></>,
    pin: <><path d="M50 90C50 90 20 58 20 38C20 20 34 10 50 10C66 10 80 20 80 38C80 58 50 90 50 90Z" {...p}/><circle cx="50" cy="38" r="11" {...p}/></>,
    cal: <><rect x="12" y="20" width="76" height="68" rx="8" {...p}/><path d="M12 42H88M32 10V28M68 10V28" {...p}/></>,
    card: <><rect x="8" y="24" width="84" height="54" rx="8" {...p}/><circle cx="30" cy="48" r="8" {...p}/><path d="M48 44H78M48 58H70" {...p}/></>,
  }[name];
  return <svg width={s} height={s} viewBox="0 0 100 100">{g}</svg>;
};

// ---------- animazioni sincronizzate al V1 (tempi video in secondi nei commenti) ----------

// 0.2-3.6s "Quanto ti rende lo stand dal 9 novembre?" + ticker € 10.000+
export const HookStand: React.FC = () => {
  const f = useCurrentFrame();
  const n = Math.round(interpolate(f, [36, 90], [0, 10000], {...clamp, easing: Easing.out(Easing.cubic)}));
  const txt = n.toLocaleString('it-IT');
  return <Stage>
    <Pill y={140} delay={0} size={28}><Img src={staticFile('eicma-logo.png')} style={{height: 30}}/><span>3–8 novembre</span></Pill>
    <Card y={216} dark delay={4} w={940}><div style={{fontSize: 62, lineHeight: 1.08, fontWeight: 700}}>
      <Words text="Quanto ti rende lo stand dal 9 novembre?" d={8} step={3}/></div></Card>
    <Card y={438} w={560} x={80} delay={30} pad="14px 26px"><div style={{display: 'flex', alignItems: 'baseline', gap: 14}}>
      <span style={{fontSize: 56, fontWeight: 800, letterSpacing: -1}}>€ {txt}{n >= 10000 ? '+' : ''}</span>
      <span style={{fontSize: 24, color: C.grey, fontWeight: 500}}>decine di migliaia</span></div></Card>
  </Stage>;
};

// 3.5-7.3s costi dello stand: spazio / allestimento / persone / trasferte (parole a 3.7, 4.7, 5.6, 6.3s)
export const CostoStand: React.FC = () => {
  const f = useCurrentFrame();
  const items: [string, 'spazio' | 'allestimento' | 'persone' | 'trasferte', number][] = [
    ['Spazio', 'spazio', 7], ['Allestimento', 'allestimento', 37], ['Persone', 'persone', 62], ['Trasferte', 'trasferte', 83]];
  return <Stage>
    <Pill y={140} dark delay={0} size={26}><span>Il costo di uno stand</span></Pill>
    {items.map(([label, ic, d], i) => {
      const x = 52 + i * 248, y = 196; const act = f >= d && f < d + 22;
      return <Card key={label} x={x} y={y} w={236} delay={d} dark={act} pad="16px 10px">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
          <Icon name={ic} s={54} c={act ? C.white : C.black} draw={ease(f, d + 2, d + 20)}/>
          <span style={{fontSize: 31, fontWeight: 700}}>{label}</span></div></Card>;
    })}
  </Stage>;
};

// 7.0-13.1s 8 novembre si smonta -> 9 novembre -> "quanto ci è tornato indietro?"
export const DateFlip: React.FC = () => {
  const f = useCurrentFrame();
  const strike = ease(f, 52, 66); const fadeL = 1 - 0.55 * ease(f, 56, 70);
  const q = ease(f, 140, 156); const tiles = 1 - ease(f, 136, 150);
  return <Stage>
    <div style={{opacity: tiles}}>
      <Card x={80} y={160} w={430} dark={false} delay={3} pad="18px 26px" style={{opacity: undefined}}>
        <div style={{opacity: fadeL, position: 'relative'}}>
          <div style={{fontSize: 30, color: C.grey, fontWeight: 700, letterSpacing: 4}}>NOV</div>
          <div style={{fontSize: 118, fontWeight: 800, lineHeight: 0.95}}>8</div>
          <div style={{fontSize: 30, fontWeight: 700, marginTop: 6}}>Si smonta tutto</div>
          <div style={{position: 'absolute', left: -6, top: 70, height: 6, width: `${strike * 108}%`, background: C.black, transform: 'rotate(-14deg)', transformOrigin: 'left center', borderRadius: 3}}/>
        </div></Card>
      <Card x={570} y={160} w={430} dark delay={62} pad="18px 26px">
        <div style={{fontSize: 30, color: C.white, opacity: 0.7, fontWeight: 700, letterSpacing: 4}}>NOV</div>
        <div style={{fontSize: 118, fontWeight: 800, lineHeight: 0.95}}>9</div>
        <div style={{fontSize: 30, fontWeight: 700, marginTop: 6}}>Il giorno dopo</div></Card>
    </div>
    <div style={{opacity: q, transform: `translateY(${(1 - q) * 30}px)`}}>
      <div style={{position: 'absolute', top: 170, left: 90, width: 900, boxSizing: 'border-box', background: C.black, color: C.white, borderRadius: 22,
        padding: '26px 40px', boxShadow: '0 18px 46px rgba(10,10,10,0.38)', display: 'flex', alignItems: 'center', gap: 28}}>
        <span style={{fontSize: 130, fontWeight: 800, lineHeight: 0.9}}>?</span>
        <span style={{fontSize: 52, fontWeight: 700, lineHeight: 1.08}}>Quanto ti è tornato indietro?</span></div></div>
  </Stage>;
};

const NODES: [number, number][] = [[150, 400], [270, 330], [400, 295], [540, 285], [680, 295], [810, 330], [930, 400]];
// 13.1-17.8s la fiera si gioca dopo: rete di contatti, poi "non con quanto è bello lo stand"
export const FieraDopo: React.FC = () => {
  const f = useCurrentFrame(); const cx = 540, cy = 420;
  const stand = ease(f, 92, 106); const cross = ease(f, 108, 122);
  return <Stage>
    <Card y={140} dark delay={3} w={760} pad="20px 34px"><div style={{fontSize: 50, fontWeight: 700}}><Words text="La fiera si gioca dopo" d={5} step={4}/></div></Card>
    <svg width="1080" height="1920" style={{position: 'absolute', inset: 0}}>
      {NODES.map(([x, y], i) => {
        const d = 48 + i * 5; const l = ease(f, d, d + 14); const pop = ease(f, d + 6, d + 18);
        return <g key={i}>
          <line x1={cx} y1={cy} x2={cx + (x - cx) * l} y2={cy + (y - cy) * l} stroke={C.white} strokeWidth="3" opacity="0.9"/>
          <g transform={`translate(${x} ${y}) scale(${pop})`}><circle r="38" fill={C.white} stroke={C.black} strokeWidth="4"/>
            <g transform="translate(-20 -20) scale(0.4)"><Icon name="contatto" s={100} c={C.black}/></g></g>
        </g>;
      })}
      <g transform={`translate(${cx} ${cy}) scale(${ease(f, 40, 54)})`}><circle r="52" fill={C.black} stroke={C.white} strokeWidth="5"/>
        <text textAnchor="middle" y="14" fontSize="38" fontWeight="800" fill={C.white} fontFamily={F}>TU</text></g>
    </svg>
    <div style={{position: 'absolute', top: 470, left: 0, right: 0, textAlign: 'center', opacity: ease(f, 74, 90)}}>
      <span style={{background: C.white, color: C.black, padding: '8px 24px', borderRadius: 999, fontSize: 30, fontWeight: 700}}>i contatti che hai raccolto</span></div>
    <div style={{position: 'absolute', top: 552, left: 0, right: 0, display: 'flex', justifyContent: 'center', opacity: stand, transform: `translateY(${(1 - stand) * 20}px)`}}>
      <div style={{position: 'relative', background: C.white, borderRadius: 18, padding: '12px 28px', display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 12px 30px rgba(10,10,10,0.35)'}}>
        <Icon name="stand" s={46}/><span style={{fontSize: 34, fontWeight: 700, color: C.grey}}>quanto è bello lo stand</span>
        <div style={{position: 'absolute', left: 14, top: '50%', height: 6, width: `${cross * 92}%`, background: C.black, borderRadius: 3, transform: 'rotate(-3deg)'}}/></div></div>
  </Stage>;
};

// 17.8-21.1s lower third
export const LowerThird: React.FC = () => {
  const f = useCurrentFrame(); const bar = ease(f, 0, 14);
  return <Stage>
    <Card x={70} y={150} w={780} delay={0} pad="22px 30px 22px 44px">
      <div style={{position: 'absolute', left: 0, top: 18, bottom: 18, width: 8, borderRadius: 4, background: C.black, transform: `scaleY(${bar})`, transformOrigin: 'top'}}/>
      <div style={{fontSize: 58, fontWeight: 800, lineHeight: 1}}><Words text="Chiara Stella" d={4} step={4}/></div>
      <div style={{fontSize: 30, color: C.grey, fontWeight: 500, marginTop: 8, opacity: ease(f, 14, 28)}}>Adastra Consulting · Marketing per il settore moto</div>
      <Img src={staticFile('ad_logo_black.png')} style={{position: 'absolute', right: 30, top: 24, height: 54, opacity: ease(f, 10, 24)}}/>
    </Card>
    <Pill y={290} x={70} dark delay={16} size={28}><Img src={staticFile('eicma-logo-bianco.png')} style={{height: 26}}/><span>in fiera · 3–8 novembre</span></Pill>
  </Stage>;
};

export const Cup: React.FC<{draw: number; size?: number}> = ({draw, size = 120}) => {
  const f = useCurrentFrame(); const dash = {strokeDasharray: 400, strokeDashoffset: 400 * (1 - draw)};
  const p = {fill: 'none', stroke: C.white, strokeWidth: 5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, ...dash};
  const steam = (x: number, ph: number) => {
    const t = (f / 15 + ph) % 1; const o = Math.sin(t * Math.PI);
    return <path d={`M${x} 28 q-8 -10 0 -20 q8 -10 0 -20`} transform={`translate(0 ${-t * 14})`} fill="none" stroke={C.white} strokeWidth="4" strokeLinecap="round" opacity={o * draw}/>;
  };
  return <svg width={size} height={size} viewBox="0 0 100 100" style={{overflow: 'visible'}}>
    <path d="M18 40H72V62C72 76 62 86 48 86H42C28 86 18 76 18 62Z" {...p}/><path d="M72 46H80C88 46 88 64 80 64H71" {...p}/><path d="M12 92H78" {...p}/>
    <g transform="translate(0 20)">{steam(34, 0)}{steam(46, 0.33)}{steam(58, 0.66)}</g></svg>;
};

// 21.0-25.3s CTA: prendiamo un caffè -> scrivici CAFFÈ in DM
export const CtaCaffe: React.FC = () => {
  const f = useCurrentFrame(); const text = 'CAFFÈ'; const typed = Math.max(0, Math.min(text.length, Math.floor((f - 44) / 4)));
  const send = ease(f, 70, 78); const caret = Math.floor(f / 8) % 2 === 0;
  return <Stage>
    <Card y={140} dark delay={0} w={940} pad="22px 34px"><div style={{display: 'flex', alignItems: 'center', gap: 24}}>
      <Cup draw={ease(f, 2, 26)} size={96}/><div><div style={{fontSize: 56, fontWeight: 800, lineHeight: 1}}><Words text="Prendiamoci un caffè" d={6} step={4}/></div>
      <div style={{fontSize: 28, fontWeight: 500, opacity: 0.75, marginTop: 8}}>e parliamo di come possiamo aiutarti</div></div></div></Card>
    <Card y={372} w={620} x={80} delay={34} pad="16px 22px"><div style={{display: 'flex', alignItems: 'center', gap: 16}}>
      <span style={{fontSize: 26, color: C.grey, fontWeight: 500}}>DM</span>
      <span style={{fontSize: 46, fontWeight: 800, letterSpacing: 3, minWidth: 220}}>{text.slice(0, typed)}<span style={{opacity: caret && typed < 5 ? 1 : 0}}>|</span></span>
      <div style={{marginLeft: 'auto', width: 56, height: 56, borderRadius: 28, background: C.black, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${1 - 0.18 * Math.sin(send * Math.PI)})`}}>
        <svg width="26" height="26" viewBox="0 0 24 24"><path d="M4 12H19M13 5L20 12L13 19" fill="none" stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></Card>
    <Pill y={476} x={80} delay={84} size={26}><Icon name="pin" s={30}/><span>EICMA · Fiera Milano Rho · 3–8 novembre</span></Pill>
  </Stage>;
};

// ---------- libreria drag & drop riutilizzabile (video 2, 3, 5 e ADV) ----------
export const ReteLoop: React.FC = () => {
  const f = useCurrentFrame(); const cx = 540, cy = 340;
  const pts = Array.from({length: 8}, (_, i) => [cx + Math.cos(i / 8 * Math.PI * 2) * 330, cy + Math.sin(i / 8 * Math.PI * 2) * 150] as [number, number]);
  return <Stage fade={false}><svg width="1080" height="1920" style={{position: 'absolute', inset: 0}}>
    {pts.map(([x, y], i) => {
      const t = ((f / 60) + i / 8) % 1;
      return <g key={i}><line x1={cx} y1={cy} x2={x} y2={y} stroke={C.white} strokeWidth="3" opacity="0.85"/>
        <circle cx={cx + (x - cx) * t} cy={cy + (y - cy) * t} r="7" fill={C.white}/>
        <circle cx={x} cy={y} r={34 + Math.sin(f / 10 + i) * 2} fill={C.white} stroke={C.black} strokeWidth="4"/>
        <g transform={`translate(${x - 17} ${y - 17}) scale(0.34)`}><Icon name="contatto" s={100}/></g></g>;
    })}
    <circle cx={cx} cy={cy} r={50 + Math.sin(f / 12) * 3} fill={C.black} stroke={C.white} strokeWidth="5"/>
    <text x={cx} y={cy + 13} textAnchor="middle" fontSize="36" fontWeight="800" fill={C.white} fontFamily={F}>TU</text></svg></Stage>;
};

export const BigliettiDaVisita: React.FC = () => {
  const f = useCurrentFrame(); const k = [ease(f, 0, 20), ease(f, 6, 26), ease(f, 12, 32), ease(f, 18, 38)];
  return <Stage>{k.map((t, i) => <div key={i} style={{
    position: 'absolute', top: 200 + i * 20 - t * i * 26, left: 60 + t * i * 120, width: 560, height: 320, background: C.white, color: C.black,
    borderRadius: 18, boxShadow: '0 16px 40px rgba(10,10,10,0.4)', transform: `rotate(${(i - 1.5) * 5 * t}deg)`, opacity: ease(f, i * 6, i * 6 + 10), padding: 30, boxSizing: 'border-box'}}>
    <div style={{fontSize: 36, fontWeight: 800}}>Nome Cognome</div><div style={{fontSize: 24, color: C.grey, marginTop: 4}}>Azienda · Ruolo</div>
    <div style={{height: 3, width: 120, background: C.black, margin: '26px 0 16px'}}/><div style={{fontSize: 22, color: C.grey}}>nome@azienda.it</div></div>)}</Stage>;
};

export const CentoBigliettiZero: React.FC = () => {
  const f = useCurrentFrame(); const n = Math.round(interpolate(f, [4, 50], [0, 100], {...clamp, easing: Easing.out(Easing.cubic)}));
  const z = ease(f, 64, 78);
  return <Stage>
    <Card x={80} y={160} w={440} delay={0} pad="20px 26px"><div style={{fontSize: 96, fontWeight: 800, lineHeight: 1}}>{n}</div><div style={{fontSize: 30, fontWeight: 700}}>biglietti da visita</div></Card>
    <Card x={560} y={160} w={440} dark delay={60} pad="20px 26px"><div style={{fontSize: 96, fontWeight: 800, lineHeight: 1, transform: `scale(${0.8 + 0.2 * z})`, transformOrigin: 'left'}}>0</div><div style={{fontSize: 30, fontWeight: 700}}>richiamati</div></Card>
  </Stage>;
};

export const CalendarioNovembre: React.FC = () => {
  const f = useCurrentFrame(); const flip = ease(f, 36, 50);
  const day = flip < 0.5 ? '8' : '9';
  return <Stage><Card x={290} y={150} w={500} delay={0} pad="0"><div style={{background: C.black, color: C.white, borderRadius: '22px 22px 0 0', padding: '14px 0', textAlign: 'center', fontSize: 34, fontWeight: 800, letterSpacing: 6}}>NOVEMBRE</div>
    <div style={{textAlign: 'center', fontSize: 190, fontWeight: 800, padding: '10px 0 16px', lineHeight: 1, transform: `scaleY(${Math.abs(1 - 2 * flip)})`}}>{day}</div></Card></Stage>;
};

export const PinFiera: React.FC = () => {
  const f = useCurrentFrame(); const drop = ease(f, 0, 16);
  return <Stage><div style={{position: 'absolute', top: 150 - (1 - drop) * 80, left: 80, opacity: drop}}><Icon name="pin" s={110} c={C.white}/></div>
    <Card x={220} y={158} w={700} dark delay={8} pad="18px 30px"><div style={{fontSize: 44, fontWeight: 800}}>Fiera Milano Rho</div><div style={{fontSize: 28, opacity: 0.75, marginTop: 4}}>EICMA · 3–8 novembre</div></Card></Stage>;
};

export const DmCaffe: React.FC = () => {
  const f = useCurrentFrame(); const text = 'CAFFÈ'; const typed = Math.max(0, Math.min(5, Math.floor((f - 14) / 4))); const send = ease(f, 40, 48);
  return <Stage><Card y={170} w={760} delay={0} pad="18px 26px"><div style={{display: 'flex', alignItems: 'center', gap: 16}}>
    <span style={{fontSize: 28, color: C.grey}}>DM</span><span style={{fontSize: 52, fontWeight: 800, letterSpacing: 3}}>{text.slice(0, typed)}</span>
    <div style={{marginLeft: 'auto', width: 62, height: 62, borderRadius: 31, background: C.black, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${1 - 0.18 * Math.sin(send * Math.PI)})`}}>
      <svg width="30" height="30" viewBox="0 0 24 24"><path d="M4 12H19M13 5L20 12L13 19" fill="none" stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></Card>
    <Pill y={310} dark delay={52} x={160} size={28}><span>Scrivici e ti rispondiamo</span></Pill></Stage>;
};

export const TazzaLoop: React.FC = () => <Stage fade={false}><div style={{position: 'absolute', top: 170, left: 430}}><Cup draw={1} size={220}/></div></Stage>;

export const EicmaBadge: React.FC = () => <Stage><Pill y={160} x={190} delay={0} size={40}><Img src={staticFile('eicma-logo.png')} style={{height: 46}}/><span>3–8 novembre 2026</span></Pill>
  <Pill y={256} x={190} dark delay={8} size={30}><span>Fiera Milano Rho · 83ª edizione</span></Pill></Stage>;

export const RoiFreccia: React.FC = () => {
  const f = useCurrentFrame(); const d = ease(f, 8, 54);
  const pts = [[0, 150], [120, 120], [200, 150], [330, 70], [440, 100], [560, 20]];
  const path = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
  return <Stage><Card y={150} w={760} delay={0} pad="22px 34px"><div style={{fontSize: 34, fontWeight: 700, color: C.grey}}>Ritorno sull'investimento</div>
    <svg width="640" height="190" viewBox="0 0 640 190" style={{marginTop: 8}}><path d={path} fill="none" stroke={C.black} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1000" strokeDashoffset={1000 * (1 - d)}/>
      <g opacity={ease(f, 54, 64)}><circle cx="560" cy="20" r="12" fill={C.black}/></g></svg>
    <div style={{fontSize: 56, fontWeight: 800, opacity: ease(f, 40, 56)}}>Quanto ti è tornato?</div></Card></Stage>;
};

export const StandVsContatti: React.FC = () => {
  const f = useCurrentFrame(); const l = ease(f, 0, 16), r = ease(f, 18, 34), x = ease(f, 40, 54);
  return <Stage>
    <Card x={80} y={160} w={440} delay={0} pad="22px 26px"><div style={{display: 'flex', alignItems: 'center', gap: 18, position: 'relative', opacity: 1 - 0.45 * x}}>
      <Icon name="stand" s={70}/><span style={{fontSize: 44, fontWeight: 800}}>Lo stand</span>
      <div style={{position: 'absolute', left: 0, top: '50%', height: 6, width: `${x * 100}%`, background: C.black, borderRadius: 3}}/></div></Card>
    <Card x={560} y={160} w={440} dark delay={18} pad="22px 26px"><div style={{display: 'flex', alignItems: 'center', gap: 18}}>
      <Icon name="contatto" s={70} c={C.white}/><span style={{fontSize: 44, fontWeight: 800}}>I contatti</span></div></Card>
  </Stage>;
};

// "decine di migliaia di euro": pila di monete che sale + contatore 10.000 -> 90.000 + etichetta
export const DecineDiMigliaia: React.FC = () => {
  const f = useCurrentFrame();
  const n = Math.round(interpolate(f, [6, 60], [0, 10000], {...clamp, easing: Easing.out(Easing.cubic)}));
  const coins = 6;
  return <Stage>
    <Card y={150} w={800} x={140} delay={0} pad="22px 34px 22px 190px" style={{minHeight: 190}}>
      <div style={{position: 'absolute', left: 36, bottom: 24, width: 130, height: 150}}>
        <svg width="130" height="150" viewBox="0 0 130 150" style={{overflow: 'visible'}}>
          {Array.from({length: coins}, (_, i) => {
            const t = ease(f, 4 + i * 8, 4 + i * 8 + 12); const y = 118 - i * 18;
            return <g key={i} opacity={t} transform={`translate(0 ${(1 - t) * -50})`}>
              <ellipse cx="65" cy={y + 12} rx="52" ry="16" fill={C.black}/>
              <rect x="13" y={y - 2} width="104" height="14" fill={C.black}/>
              <ellipse cx="65" cy={y - 2} rx="52" ry="16" fill={C.white} stroke={C.black} strokeWidth="5"/>
              <text x="65" y={y + 4} textAnchor="middle" fontSize="20" fontWeight="800" fill={C.black} fontFamily={F}>€</text></g>;
          })}
        </svg></div>
      <div style={{fontSize: 22, fontWeight: 700, color: C.grey, letterSpacing: 3}}>UNO STAND COSTA</div>
      <div style={{fontSize: 100, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2}}>€ {n.toLocaleString('it-IT')}{n >= 10000 ? '+' : ''}</div>
      <div style={{fontSize: 34, fontWeight: 700, opacity: ease(f, 56, 72), transform: `translateY(${(1 - ease(f, 56, 72)) * 14}px)`}}>decine di migliaia di euro</div>
    </Card>
  </Stage>;
};
