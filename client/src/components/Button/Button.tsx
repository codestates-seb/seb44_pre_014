import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Button: React.FC<TProps> = ({
  children,
  color = 'var(--white)',
  bgColor = 'var(--blue-500)',
  hoverColor = 'var(--white)',
  hoverBgColor = 'var(--blue-600);',
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      bgColor={bgColor}
      hoverColor={hoverColor}
      hoverBgColor={hoverBgColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

type ButtonProps = {
  color: string;
  bgColor: string;
  hoverColor: string;
  hoverBgColor: string;
};

const StyledButton = styled.div<ButtonProps>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  height: min-content;
  cursor: pointer;
  font-size: 13px;
  padding: 10px;
  border-radius: 4px;
  white-space: nowrap !important;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBgColor }) => hoverBgColor};
  }
`;
