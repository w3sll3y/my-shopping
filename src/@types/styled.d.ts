import 'styled-components/native';
import theme from '../themeStyledComponents';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}