import Oauth from 'feature/Login/Oauth';
import LoginForm from 'feature/Login/LoginForm';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div>
        <Oauth />
        <LoginForm />
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;

const StyledLoginPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-050);
`;
