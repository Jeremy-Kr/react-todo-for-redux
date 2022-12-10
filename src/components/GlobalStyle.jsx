import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    max-width: 1140px;
    min-width: 720px;
  }
  ul{
   list-style:none;
   }
   h3{
    margin: 0px;
   }
`;

export default GlobalStyle;
