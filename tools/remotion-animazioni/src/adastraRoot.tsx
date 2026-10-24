import React from 'react';
import {Composition, Sequence} from 'remotion';
import {FPS, W, H} from './brand';
import * as A from './adastra';

// id kebab-case = nome file. Secondi: durata della composizione.
export const TIMED: [string, React.FC, number, number][] = [
  // id, componente, durata (s), inizio nel video V1 (s)
  ['01-hook-stand', A.HookStand, 3.4, 0.2],
  ['02-costo-stand', A.CostoStand, 3.8, 3.5],
  ['03-8-9-novembre', A.DateFlip, 6.1, 7.0],
  ['04-la-fiera-si-gioca-dopo', A.FieraDopo, 4.7, 13.1],
  ['05-lower-third-chiara', A.LowerThird, 3.3, 17.8],
  ['06-cta-caffe', A.CtaCaffe, 4.3, 21.0],
];
export const LIBRERIA: [string, React.FC, number][] = [
  ['lib-rete-networking-loop', A.ReteLoop, 4], ['lib-biglietti-da-visita', A.BigliettiDaVisita, 3],
  ['lib-cento-biglietti-zero-richiamati', A.CentoBigliettiZero, 4], ['lib-calendario-novembre', A.CalendarioNovembre, 3],
  ['lib-pin-fiera-milano-rho', A.PinFiera, 3], ['lib-dm-caffe', A.DmCaffe, 3], ['lib-tazza-caffe-loop', A.TazzaLoop, 3],
  ['lib-eicma-badge', A.EicmaBadge, 3], ['lib-roi-freccia', A.RoiFreccia, 3], ['lib-stand-vs-contatti', A.StandVsContatti, 3], ['lib-decine-di-migliaia-di-euro', A.DecineDiMigliaia, 3.5],
];
const Overlay: React.FC = () => <>{TIMED.map(([id, C, d, s]) =>
  <Sequence key={id} from={Math.round(s * FPS)} durationInFrames={Math.round(d * FPS)}><C/></Sequence>)}</>;
export const AdastraRoot: React.FC = () => <>
  {TIMED.map(([id, C, d]) => <Composition key={id} id={id} component={C} width={W} height={H} fps={FPS} durationInFrames={Math.round(d * FPS)}/>)}
  {LIBRERIA.map(([id, C, d]) => <Composition key={id} id={id} component={C} width={W} height={H} fps={FPS} durationInFrames={Math.round(d * FPS)}/>)}
  <Composition id="adastra-v1-overlay" component={Overlay} width={W} height={H} fps={FPS} durationInFrames={Math.round(25.27 * FPS)}/>
</>;
