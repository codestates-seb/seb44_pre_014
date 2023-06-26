import Community from 'feature/Signup/Community';
import Oauth from 'feature/Signup/Oauth';
import SignupForm from 'feature/Signup/SignupForm';

import styled from 'styled-components';

const SignupPage = () => {
  return (
    <StyledSignupPage>
      <div className="signup-page-box">
        <Community />
        <div className="signup-page-box-right">
          <Oauth />
          <SignupForm />
        </div>
      </div>
    </StyledSignupPage>
  );
};

export default SignupPage;

const StyledSignupPage = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 110%;
  background-color: var(--black-050);

  .signup-page-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1264px;
    padding: 24px;

    .signup-page-box-right {
    }
  }
`;
