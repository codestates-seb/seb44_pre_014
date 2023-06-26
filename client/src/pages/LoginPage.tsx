import Oauth from 'feature/Login/Oauth';
import LoginForm from 'feature/Login/LoginForm';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <DivContainer>
        <Oauth />
        <LoginForm />
      </DivContainer>
    </StyledLoginPage>
  );
};

export default LoginPage;

const StyledLoginPage = styled.div`
  width: 100vw;
  position: absolute;
  left: 0;
  background-color: var(--black-050);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivContainer = styled.div`
  max-width: 1264px;
  padding: 24px;
`;
