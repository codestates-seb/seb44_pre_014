import styled from 'styled-components';

const LoginForm = () => {
  return (
    <div>
      <StyledSignupForm>
        <form>
          <LabelInputSection>
            <Label htmlFor="email">Email</Label>
            <div>
              <Input type="email" name="email" required />
            </div>
          </LabelInputSection>

          <LabelInputSection>
            <Div>
              <Label htmlFor="password">Password</Label>
              <a href="">Forgot password?</a>
            </Div>

            <div>
              <Input type="password" name="password" required />
            </div>
          </LabelInputSection>

          <div>
            <SubmitButton type="submit">Sign up</SubmitButton>
          </div>
        </form>
      </StyledSignupForm>

      <StyledLoginTextSection>
        Don’t have an account?{' '}
        <LogInClickSection href="">Sign up</LogInClickSection>
      </StyledLoginTextSection>
    </div>
  );
};

export default LoginForm;

const StyledSignupForm = styled.div`
  width: 268px;
  height: 229px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: var(--white);
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

const LabelInputSection = styled.div`
  margin: 6px 0px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    text-decoration-line: none;
    font-size: 12px;
    color: var(--blue-600);
  }
`;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid var(--black-200);
  cursor: unset;
  margin: 0;
  width: 100%;
  height: 32.59px;
  &:focus {
    border-color: var(--blue-200);
    outline: none;
    box-shadow: 0px 0px 3px 3px var(--blue-100);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 37.78px;
  box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.4);
  background-color: var(--blue-500);
  color: var(--white);
  padding: 10.4px;
  margin: 2px 0px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 13px;
  border-radius: 5px;

  &:hover {
    background-color: var(--blue-600);
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 600;
  margin: 2px 0px;
  padding: 0px 2px;
  font-size: 15px;
`;

const StyledLoginTextSection = styled.div`
  width: 268px;
  height: 78px;
  margin: 0px 0px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogInClickSection = styled.a`
  text-decoration-line: none;
  color: var(--blue-500);
`;
