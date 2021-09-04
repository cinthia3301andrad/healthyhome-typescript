import React from 'react';
import { Container } from './styles';

interface PropsTooltip {
  title: string;
  isTable? : boolean;
  children: React.ReactNode;
  isEmpty?: boolean;
  width: string;
  left?: string;
  color?: string;
}

const Tooltip = ({
  title,
  isTable = false,
  children,
  isEmpty = false,
  width,
  left = '50%',
  color = '#203442',
}: PropsTooltip) => (
  <Container
    isTable={isTable}
    isEmpty={isEmpty}
    width={width}
    left={left}
    color={color}
  >
    {children}
    <span className="tooltip-span">{title}</span>
  </Container>
);

export default Tooltip;
