import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #F6F9FF;
    
    --green-700: #00BFA5;
    --green-600: #1DE9B6;
    --green-500: #64FFDA;
    

    --text-body: #4D4F6C;

    --shape: #FFFFFF;
    --shape-100:#D1D2D6;

    --small: 540px;
    --small-900: 620px;
    --medium: 720px;

}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
/*   1 REM é o tamanho da font-size da pagina */
    html {
      @media(max-width: 1080px) {
        font-size: 93.75%; /* 15px */
      }  
      @media(max-width: 720px) {
        font-size: 87.5%; /* 14px */
      }  
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
    button {
      cursor: pointer;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .react-modal-overlay {
      display: flex;
      align-items:center;
      justify-content: center;

      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
    .react-modal-content {
      width:100% ;
      max-width: 576px;
     
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
    }
    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      
      transition: filter 0.3s;
      &:hover {
        filter: brightness(0.7);
      }
  }
`;
