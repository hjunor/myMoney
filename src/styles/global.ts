import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --blue-light: #6933FF;
  --blue: #5429CC;
  --red: #E52E4D;
  --text-title: #363F5F;
  --text-body:#969CB3;
  --shape: #ffffff;
  --green: #33CC95;
}
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
html{
  @media (max-width: 1080px ){
    font-size: 93.75%;
  }
  @media (max-width: 720px ){
    font-size: 87.5%;
  }
  @media (max-width: 720px ){
    font-size: 75%;
  }
}
body{
  background:var(--background) ;
  -webkit-font-smoothing: antialiased;
}

body,input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
h1,h2,h3,h4,h5,h6, strong{
  font-weight: 600;
}
button{
  cursor: pointer;
  border: none;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}
*{
  li{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }
}

.react-modal-overlay {
  background: rgba(0,0,0,0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content {
 width: 100%;
 height:576px;
 max-width: 576px;
 background: var(--background);
 padding: 3rem;
 position: relative;
 border-radius: 0.25rem;
}
.react-modal-close{
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border: 0;
  background: transparent;
  transition: all.2s ease-in;
  &:hover{
    filter: brightness(0.6);
  }
}
`;
