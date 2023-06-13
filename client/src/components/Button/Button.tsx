import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
  bgColor: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const ButtonTest: React.FC<TProps> = ({ children, bgColor, onClick }) => {
  return (
    <SButtonTest bgColor={bgColor} onClick={onClick}>
      {children}
    </SButtonTest>
  );
};

export default ButtonTest;

type ButtonTestProps = {
  bgColor: string;
};

const SButtonTest = styled.div<ButtonTestProps>`
  background-color: ${({ bgColor }) => bgColor};
`;
