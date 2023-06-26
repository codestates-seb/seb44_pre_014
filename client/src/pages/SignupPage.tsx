import Community from 'feature/Signup/Community';
import Oauth from 'feature/Signup/Oauth';
import SignupForm from 'feature/Signup/SignupForm';

import styled from 'styled-components';

const SignupPage = () => {
  return (
    <StyledSignupPage>
      <Community />
      <div>
        <Oauth />
        <SignupForm />
      </div>
    </StyledSignupPage>
  );
};

export default SignupPage;

const StyledSignupPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
