import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: "Segoe UI", Arial, sans-serif;
    background: #fff4cc;
    color: #1a1a1a;
  }
  ul { list-style: none; }
`;

export default GlobalStyle;