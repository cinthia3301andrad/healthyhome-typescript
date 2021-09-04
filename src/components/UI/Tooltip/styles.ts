import styled, { css } from 'styled-components';

interface Props {
  isTable : boolean;
  isEmpty : boolean;
  width: string;
  left : string;
  color : string;

}
export const Container = styled.div<Props>`
  position: relative;
  top: 2px;

  .tooltip-span {
    text-align: center;
    background: ${({ color }) => color};
    padding: 9px 0px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    opacity: 0;
    transition: all 0.4s ease-in;
   
    ${(props) => props.isEmpty && css`
      width: 150px;
    `}
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);

    ${(props) => props.isTable && css`
      left: 10%;
    `}

    width: ${({ width }) => width ? width : 'auto'};

    transform: translateX(-50%);

    color: white;

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ color }) => color} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 44%;
      transform: translateX(-50%);
    }
  }

   &:hover .tooltip-span {
    opacity: 1;
    visibility: visible;
  }
`;
