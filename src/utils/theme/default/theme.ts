import space from './space';
import colors from './colors';
import fontSizes from './fontSizes';
import lineHeights from './lineHeights';
import breakpoints from './breakpoints';

const defaultTheme = {
  space,
  colors,
  fontSizes,
  lineHeights,
  breakpoints,
};

type MyDefaultTheme = typeof defaultTheme;

export default defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyDefaultTheme {}
}
