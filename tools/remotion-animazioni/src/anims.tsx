import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BRANDS, BrandName} from './brand';
import {Stage, Sticker, Eye, usePop} from './kit';

export type P = {brand: BrandName};
const pal = (b: BrandName) => BRANDS[b];
// Tutto vive nella fascia alta (y 170-560): libera da faccia, sottotitoli (y~1400-1560) e UI social.
const Col: React.FC<{children: React.ReactNode; y?: number; gap?: number}> = ({children, y = 190, gap = 18}) => (
  <div style={{position: 'absolute', left: 0, right: 0, top: y, display: 'flex', flexDirection: 'column', alignItems: 'center', gap}}>{children}</div>
);
const M = 44; // testo principale
const S = 34; // testo secondario

// 1. Problema: correttore nelle pieghe (0-5s)
export const Pieghe: React.FC<P> = ({brand}) => {
  const p = pal(brand); const {scale} = usePop(0);
  const f = useCurrentFrame();
  const cr = interpolate(f, [10, 20], [0, 1], {extrapolateRight: 'clamp'});
  return <Stage><Col>
    <div style={{transform: `scale(${scale})`}}><Eye pal={p} bag={0.5} creases={cr} size={300}/></div>
    <Sticker pal={p} text="Correttore nelle pieghe?" bg="black" delay={8} size={M}/>
  </Col></Stage>;
};

// 2. Causa n.1 (7-12s)
export const CausaPelle: React.FC<P> = ({brand}) => {
  const p = pal(brand);
  return <Stage><Col>
    <Sticker pal={p} text="Causa n°1" bg="pink" delay={0} size={S} rot={-2}/>
    <Sticker pal={p} text="Pelle non preparata" delay={6} size={M}/>
  </Col></Stage>;
};

// 3. Prodotto (12-20s)
export const Prodotto: React.FC<P> = ({brand}) => {
  const p = pal(brand);
  const f = useCurrentFrame();
  const vib = f > 14 ? Math.sin(f * 2.4) * 1 : 0;
  return <Stage><Col>
    <Sticker pal={p} text="Contorno occhi vibrante" delay={0} size={M} rot={vib}/>
    <Sticker pal={p} text="VT Cosmetics" bg="pink" delay={7} size={S}/>
  </Col></Stage>;
};

// 4. Ti riconosci? (20-25s) checklist con spunte
export const TiRiconosci: React.FC<P> = ({brand}) => {
  const p = pal(brand);
  const f = useCurrentFrame();
  const items = ['Occhiaie', 'Contorno occhi gonfio', 'Correttore che si piega'];
  return <Stage><Col gap={14}>
    <Sticker pal={p} text="Ti riconosci?" bg="pink" size={S}/>
    {items.map((t, i) => {
      const d = 12 + i * 12;
      const tick = interpolate(f, [d + 8, d + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
      return <div key={t} style={{position: 'relative'}}>
        <Sticker pal={p} text={t} delay={d} size={S} style={{padding: '10px 24px'}}/>
        <svg width="44" height="44" viewBox="0 0 100 100" style={{position: 'absolute', right: -24, top: -12, opacity: tick, transform: `scale(${0.4 + tick * 0.6})`}}>
          <circle cx="50" cy="50" r="46" fill={p.pink} stroke={p.black} strokeWidth="8"/>
          <path d="M26 52 L44 70 L76 32" fill="none" stroke={p.white} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg></div>;
    })}
  </Col></Stage>;
};

// 5. Decongestiona e drena i liquidi (25-29s)
export const Drena: React.FC<P> = ({brand}) => {
  const p = pal(brand); const f = useCurrentFrame(); const {scale} = usePop(0);
  const drops = [0, 1, 2].map(i => {
    const t = ((f - 10 - i * 8) % 36) / 36;
    const on = f >= 10 + i * 8;
    return {x: 330 + i * 90, y: on ? 90 + t * 200 : 0, o: on ? 1 - t : 0};
  });
  return <Stage><Col>
    <div style={{transform: `scale(${scale})`}}>
      <svg width="360" height="230" viewBox="0 0 540 340">
        {[0, 1].map(i => {
          const r = 50 + ((f * 4 + i * 35) % 70);
          return <circle key={i} cx="150" cy="110" r={r} fill="none" stroke={p.pink} strokeWidth="8" opacity={1 - (r - 50) / 70}/>;
        })}
        <g transform={`rotate(${Math.sin(f * 2.6) * 3} 150 110)`}>
          <rect x="128" y="20" width="44" height="170" rx="22" fill={p.black}/>
          <rect x="138" y="86" width="24" height="24" rx="12" fill={p.pink}/>
        </g>
        {drops.map((d, i) => <path key={i} transform={`translate(${d.x - 300} ${d.y})`} opacity={d.o}
          d="M300 0 C340 50 340 80 300 80 C260 80 260 50 300 0Z" fill={p.white} stroke={p.black} strokeWidth="6"/>)}
      </svg></div>
    <Sticker pal={p} text="Decongestiona" bg="black" delay={4} size={M}/>
    <Sticker pal={p} text="Drena i liquidi" bg="pink" delay={10} size={S}/>
  </Col></Stage>;
};

// 6. Prima / dopo: borse che si sgonfiano (29-33s)
export const PrimaDopo: React.FC<P> = ({brand}) => {
  const p = pal(brand); const f = useCurrentFrame(); const {scale} = usePop(0);
  const k = interpolate(f, [30, 58], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const after = f >= 56;
  return <Stage><Col>
    <div style={{transform: `scale(${scale})`}}><Eye pal={p} bag={k} creases={k} size={300}/></div>
    <Sticker pal={p} text={after ? 'Ultra disteso' : 'Gonfio'} bg={after ? 'pink' : 'black'} delay={6} size={M}/>
  </Col></Stage>;
};

// 7. Routine 3 step (34.5-38.5s)
export const Routine: React.FC<P> = ({brand}) => {
  const p = pal(brand);
  const steps = ['Contorno occhi', 'Correttore', 'Cipria per fissare'];
  return <Stage><Col gap={14}>
    {steps.map((t, i) => <div key={t} style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <Sticker pal={p} text={String(i + 1)} bg="pink" delay={i * 14} size={S} style={{padding: '10px 18px'}}/>
      <Sticker pal={p} text={t} delay={i * 14 + 4} size={S} style={{minWidth: 380}}/>
    </div>)}
  </Col></Stage>;
};

// 8. Link in bio (39-42s)
export const LinkInBio: React.FC<P> = ({brand}) => {
  const p = pal(brand); const f = useCurrentFrame();
  const bounce = Math.abs(Math.sin(f * 0.3)) * 10;
  return <Stage><Col>
    <Sticker pal={p} text="Contorno occhi disteso" delay={0} size={S}/>
    <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
      <Sticker pal={p} text="Link in bio" bg="pink" delay={8} size={M}/>
      <svg width="52" height="52" viewBox="0 0 100 100" style={{transform: `translateY(${-bounce}px)`}}>
        <path d="M50 8 L88 52 H62 V92 H38 V52 H12Z" fill={p.pink} stroke={p.black} strokeWidth="7" strokeLinejoin="round"/>
      </svg>
    </div>
  </Col></Stage>;
};
