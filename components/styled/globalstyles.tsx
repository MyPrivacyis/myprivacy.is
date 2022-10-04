import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url(/fonts/Inter-SemiBold.ttf);
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/Inter-Regular.ttf);
  font-display: swap;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.titleColor};
    font-family: 'Inter', sans-serif;
  }

  ::selection {
    background-color: #55ACEE12;
    color: #55ACEE;
  }
`;

export default GlobalStyle;
