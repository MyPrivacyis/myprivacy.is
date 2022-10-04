import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    titleColor: string;
    bodyText: string;
    panel: string;
    panelHover: string;
    border: string;
    toggle: string;
    tag: string;
    navigator: string;
    navigatorBorder: string;
    shadow: string;

    colors: {
      red: '#EC506E';
    };
  }
}
