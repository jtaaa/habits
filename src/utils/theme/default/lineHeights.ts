const lineHeights = {
  XS: '16px',
  S: '18px',
  M: '20px',
  L: '22px',
  XL: '24px',
  XXL: '28px',
  H: '36px',
  XH: '52px',
  XXH: '76px',
} as const;

export type ThemeLineHeights = typeof lineHeights;

export default lineHeights;
