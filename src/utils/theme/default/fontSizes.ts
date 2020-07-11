const fontSizes = {
  XS: 12,
  S: 14,
  M: 16,
  L: 18,
  XL: 20,
  XXL: 24,
  H: 32,
  XH: 48,
  XXH: 72,
} as const;

export type ThemeFontSizes = typeof fontSizes;

export default fontSizes;
