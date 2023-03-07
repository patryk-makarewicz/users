import { createGlobalStyle } from 'styled-components';
import { pxToRem } from './helpers';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Archivo', sans-serif;
  color: #242424;
  background-color: #ffffff;
  font-size: ${pxToRem('16px')};
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --text-color: #242424;
  --background-color: #ffffff;
  --background-secondary-color: #ffffff;
  --border-color: #e5e5e5;
}

[data-theme='dark'] {
  --text-color: #ffffff;
  --background-color: #242424;
  --background-secondary-color: #2b2f34;
  --border-color: #242424;
}

 /* Change autocomplete styles in WebKit */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
   /* border: 1px solid var(--color-white); */
    /* -webkit-text-fill-color: white; */
    /* box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset; */
    transition: background-color 5000s ease-in-out 0s;
}
`;

export default GlobalStyles;
