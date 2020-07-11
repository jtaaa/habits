const space = {
  NONE: 0,
  XXS: 4,
  XS: 8,
  S: 12,
  M: 16,
  L: 24,
  XL: 32,
  XXL: 48,
  H: 64,
} as const;

export type ThemeSpace = typeof space;

export default space;
