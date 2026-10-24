import React from 'react';
import {spring, interpolate, useCurrentFrame, useVideoConfig, staticFile} from 'remotion';
import {BRANDS, BrandName, FONT} from './brand';

const fontFace = `@font-face{font-family:${FONT};src:url(${staticFile('Montra-Regular.otf')});}`;

export const Stage: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{width: '100%', height: '100%', position: 'relative', fontFamily: FONT}}>
    <style>{fontFace}</style>
    {children}
  </div>
);

// Ingresso "pop" con overshoot, uscita secca negli ultimi frame.
export const usePop = (delay = 0, outFrames = 6) => {
  const f = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const inn = spring({frame: f - delay, fps, config: {damping: 9, mass: 0.6, stiffness: 190}});
  const out = interpolate(f, [durationInFrames - outFrames, durationInFrames - 1], [1, 0], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  return {scale: inn * out, opacity: f < delay ? 0 : out, f};
};

type Pal = (typeof BRANDS)[BrandName];

// Sticker stile 2000s: riquadro bianco/nero, bordo spesso, ombra rigida.
export const Sticker: React.FC<{
  text: string; pal: Pal; delay?: number; size?: number; bg?: 'white' | 'black' | 'pink';
  rot?: number; style?: React.CSSProperties;
}> = ({text, pal, delay = 0, size = 84, bg = 'white', rot = 0, style}) => {
  const {scale, opacity, f} = usePop(delay);
  const fill = bg === 'white' ? pal.white : bg === 'black' ? pal.black : pal.pink;
  const ink = bg === 'white' ? pal.black : pal.white;
  const wob = Math.sin((f - delay) * 0.9) * 0.6 * Math.max(0, 1 - (f - delay) / 20);
  return (
    <div style={{
      transform: `scale(${scale}) rotate(${rot + wob}deg)`, opacity, transformOrigin: 'center',
      background: fill, color: ink, border: `4px solid ${pal.black}`, borderRadius: 18,
      boxShadow: `6px 6px 0 ${bg === 'pink' ? pal.black : pal.pink}`,
      padding: '12px 28px', fontSize: size, lineHeight: 1.05, textAlign: 'center', whiteSpace: 'nowrap',
      textTransform: 'uppercase', letterSpacing: 1, ...style,
    }}>{text}</div>
  );
};

// Occhio stilizzato (solo forme) con borse sotto: bag 0 = disteso, 1 = gonfio.
export const Eye: React.FC<{pal: Pal; bag: number; creases: number; size?: number}> = ({pal, bag, creases, size = 640}) => {
  const k = size / 640;
  return (
    <svg width={640 * k} height={420 * k} viewBox="0 0 640 420">
      <path d="M40 190 Q320 20 600 190 Q320 330 40 190Z" fill={pal.white} stroke={pal.black} strokeWidth="12" strokeLinejoin="round"/>
      <circle cx="320" cy="182" r="62" fill={pal.black}/>
      <circle cx="342" cy="160" r="16" fill={pal.white}/>
      <path d="M80 160 Q320 20 560 160" fill="none" stroke={pal.black} strokeWidth="14" strokeLinecap="round"/>
      <path d={`M90 262 Q320 ${262 + 90 * bag} 550 262`} fill="none" stroke={pal.black} strokeWidth="12" strokeLinecap="round"/>
      {[0, 1, 2].map(i => (
        <path key={i} d={`M${200 + i * 100} ${296 + 38 * bag + i * 4} q22 14 44 0`} fill="none" stroke={pal.pink}
          strokeWidth="12" strokeLinecap="round" opacity={creases}/>
      ))}
    </svg>
  );
};
