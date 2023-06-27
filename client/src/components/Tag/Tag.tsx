import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
};

const Tag: React.FC<TProps> = ({ children }) => {
  return <StyledTag>{children}</StyledTag>;
};

export default Tag;

const StyledTag = styled.div`
  background-color: var(--powder-100);
  color: var(--powder-700);
  padding: 4.8px 6px;
  border-radius: 3px;
  font-size: 12px;
  text-decoration: none;
  line-height: 1;

  &:hover {
    background-color: var(--powder-200);
    color: var(--powder-800);
  }
`;
