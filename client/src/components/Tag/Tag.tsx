import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
  link: string;
};

const Tag: React.FC<TProps> = ({ children, link }) => {
  return <StyledTag href={link}>{children}</StyledTag>;
};

export default Tag;

const StyledTag = styled.a`
  background-color: var(--color-blue-30);
  color: var(--color-blue-40);
  padding: 4.8px 6px;
  border-radius: 3px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    background-color: var(--color-blue-50);
    color: var(--color-blue-60);
  }
`;
