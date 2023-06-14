import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
  bgColor: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const ButtonTest: React.FC<TProps> = ({ children, bgColor, onClick }) => {
  return (
    <StyledButtonTest bgColor={bgColor} onClick={onClick}>
      {children}
    </StyledButtonTest>
  );
};

export default ButtonTest;

type ButtonTestProps = {
  bgColor: string;
};

const StyledButtonTest = styled.div<ButtonTestProps>`
  background-color: ${({ bgColor }) => bgColor};
`;
