import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface Props {
  isFocused: boolean;
  touched: boolean;
  error: string;
}

export const Container = styled.div<Props>`
    margin-bottom: 0.8rem;
    border: 1px solid #D1D2D6;
    width: 100%;
    border-radius: 25px;
    padding: 6px 18px;
    height: 43px;

    display: flex;
    align-items: center;

    transition: 0.3s;

  ${props => props.isFocused && css`
    border-color: #00BFA5;
  `}

  ${props => (props.error && props.touched) && css`
    border-color: #FF7575;
  `}

  input {
    width: 100%;
    border: 0;
    background: transparent;
    outline: none;
    font-size: 1rem;

    &::placeholder{
      color: ${shade(0.2, '#C9C9C9')};
    }
  }

  svg {
    margin-left: 12px;
  }
`;
