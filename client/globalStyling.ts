import { createGlobalStyle } from 'styled-components';
import theme from './components/constants/theme';

export const GlobalStyles = createGlobalStyle`
html {
    font-size: 10px;
    height: 100%;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font: ${theme.fonts.body};
    
}

a {
    color: inherit;
    text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Ubuntu', sans-serif;
}


button {
    cursor: pointer;
}
  
`;
