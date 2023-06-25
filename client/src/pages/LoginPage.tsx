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
  width: 100%;
  background-color: var(--black-050);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const DivContainer = styled.div``;
