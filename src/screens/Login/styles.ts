
import styled from 'styled-components';

import fundoBackground from '../../assets/images/fundo-home.png';
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-image: url(${fundoBackground});
  background-color: var(--green-700);

  height: 100vh;
  width: 100%;



  @media (max-width: 620px) {
    background: pink;
            
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 50px;

  max-width: 882px;
  width: 80%;
  height: 80%;
  max-height: 525px;
  background: var(--shape);

  @media (max-width: 620px) {
    width: 100%;
    height: 100vh;
    max-height: none;
    border-radius: 0;
    flex-direction: column-reverse;
            
  }

`;
export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 60px 10px;
  border-radius: 50px;
  opacity: 1;
  width: 30%;
  min-width: 200px;
  height: 100%;
 
  background: var(--green-700);

  h1 { 
    text-align: center;
    font: normal normal normal 1.6rem Poppins;
    letter-spacing: 0px;
    color: var(--shape);
  
  }

  footer {  
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    p {
      text-align: center;
      font: normal normal normal 0.85rem Poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    button {
      margin-top: 10px;
      font-size: 1rem;

      height: 35px;
      border: none;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border-radius: 19px;
      opacity: 1;

      color: var(--green-700);
      transition: filter 0.3s;

      &:hover {
      filter: brightness(0.8);
      
    }
    }
  }
  @media (max-width: 620px) { 
    padding: 35px 10px;
    height: 25%;
    width: 100%;
    border-radius: 50px 50px 0 0;

    h1 { 
     display: none;
    }
  }

`;
export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;

  img {
    width: 40%;
    width: 150px;
    height: 10%;
    min-height: 50px;
  }

  @media (max-width: 620px) { 
    img { 
      width: 90%;
      margin: 10px 0;
  }
  }
`;
