
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60%;
  max-width: 340px;
  min-width: 225px;

  margin:1rem;

  label { 
    width: 100%;
    margin-bottom: 15px;
    p {
      text-align: left;
      font-size: 1rem;
      font-family: Poppins;
      letter-spacing: 0px;
      color: var(--text-body);
      opacity: 0.6;
    }

 
  }

  button {
    border: none;
    width: 200px;
    height: 36px;
    background: var(--green-700);
    border-radius: 19px;
    opacity: 1;

    color: var(--shape);

    font-size: 1.1rem;

    height: 35px;
    transition: filter 0.3s;

    &:hover {
    filter: contrast(0.8);

    }
  }

  @media (max-width: 620px) {
    width: 100%;
    max-width: none;
  }

`;
