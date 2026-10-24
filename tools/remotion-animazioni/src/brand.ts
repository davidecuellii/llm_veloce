// Palette per cliente. Per un nuovo cliente aggiungere una voce e passare brand="..." nella Composition.
export const BRANDS = {
  teresa: {pink: '#EC00FC', black: '#0A0A0A', white: '#FFFFFF'},
} as const;
export type BrandName = keyof typeof BRANDS;
export const FONT = 'Montra';
export const W = 1080;
export const H = 1920;
export const FPS = 30;
