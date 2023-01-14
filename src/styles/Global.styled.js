import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyles = createGlobalStyle`
 ${normalize}
 body {
    margin: 0;
    padding: 0;
    background-color: var( --bg-color);
    box-sizing: border-box;
  
  }
  :root{
    --text-color:#171717;
    --bg-color:#fff;
    --brightness:unset;

  }
  html[data-theme=dark]{
   --text-color:#fff;
   --bg-color:#171717;
   --brightness:50;
  }
 `;

export default GlobalStyles;
