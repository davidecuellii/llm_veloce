import React from 'react';
import {Composition, Sequence} from 'remotion';
import {FPS, W, H} from './brand';
import * as A from './anims';
import {AdastraRoot} from './adastraRoot';

// id kebab-case = nome variante usato da scripts/renderizza.sh
const LIST: [string, React.FC<A.P>, number][] = [
  ['pieghe-problema', A.Pieghe, 3],
  ['causa-pelle', A.CausaPelle, 3],
  ['prodotto-vt', A.Prodotto, 4],
  ['ti-riconosci', A.TiRiconosci, 5],
  ['drena-liquidi', A.Drena, 4],
  ['prima-dopo', A.PrimaDopo, 4],
  ['routine-3-step', A.Routine, 4],
  ['link-in-bio', A.LinkInBio, 3],
];
export const Root: React.FC = () => <><Root2/><AdastraRoot/>{LIST.map(([id, C, s]) =>
  <Composition key={id} id={id} component={C} width={W} height={H} fps={FPS}
    durationInFrames={s * FPS} defaultProps={{brand: 'teresa' as const}}/>)}</>;

// Overlay unico per TC_09 (42.4s): tutte le animazioni ai tempi del parlato. Trascinalo sopra il video e basta.
const TC09: [React.FC<A.P>, number, number][] = [
  [A.Pieghe, 0.3, 3], [A.CausaPelle, 7, 3], [A.Prodotto, 12.5, 4], [A.TiRiconosci, 20, 5],
  [A.Drena, 25, 4], [A.PrimaDopo, 29, 4], [A.Routine, 34.5, 4], [A.LinkInBio, 39, 3],
];
const Tc09Timeline: React.FC<A.P> = ({brand}) => <>{TC09.map(([C, s, d], i) =>
  <Sequence key={i} from={Math.round(s * FPS)} durationInFrames={d * FPS}><C brand={brand}/></Sequence>)}</>;
export const Root2: React.FC = () => <Composition id="tc09-overlay" component={Tc09Timeline} width={W} height={H}
  fps={FPS} durationInFrames={Math.round(42.4 * FPS)} defaultProps={{brand: 'teresa' as const}}/>;
