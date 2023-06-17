import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <StyledWrapper>
      <FooterContainer>footer</FooterContainer>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div``;

const FooterContainer = styled.div`
  background-color: black;
  color: var(--white);
`;
