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

const DetailButton: React.FC<TProps> = ({
  children,
  color = 'var(--black-500)',
  bgColor = 'var(--white)',
  hoverColor = 'var(--black-400)',
  hoverBgColor = 'var(--white);',
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

export default DetailButton;

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
  border: 1px solid 'var(--blue-500)';
  white-space: nowrap !important;
  font-weight: normal;
  text-align: center;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBgColor }) => hoverBgColor};
  }
`;
