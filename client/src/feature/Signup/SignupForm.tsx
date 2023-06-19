import { useState } from 'react';
import styled from 'styled-components';
import reCaptchaLogo from '../../assets/reCaptchaLogo.png';

interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <StyledSignupForm>
        <form>
          <LabelInputSection>
            <Label htmlFor="username">Display name</Label>
            <div>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </LabelInputSection>

          <LabelInputSection>
            <Label htmlFor="email">Email</Label>
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </LabelInputSection>

          <LabelInputSection>
            <Label htmlFor="password">Password</Label>
            <div>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <Explanation>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </Explanation>
          </LabelInputSection>

          <NotRobotCheckBoxSection>
            <NoCapchaHereSection>
              <NoCapchaHereTop>
                <div>
                  <NoCapchaHereCheckBoxInput
                    type="checkbox"
                    name="concent"
                    value="false"
                  />
                </div>
                <RobotLabel>I'm not a robot</RobotLabel>
              </NoCapchaHereTop>
              <NoCapchaHereLogo>
                <Logo src={reCaptchaLogo}></Logo>
                <div>reCAPTCHA</div>
              </NoCapchaHereLogo>
              <NoCapchaHereBottom>
                <PrivacyTerms>
                  <PrivacySection href="https://policies.google.com/privacy?hl=en">
                    Privacy
                  </PrivacySection>
                  <div>-</div>
                  <TermsSection href="https://policies.google.com/terms?hl=en">
                    Terms
                  </TermsSection>
                </PrivacyTerms>
              </NoCapchaHereBottom>
            </NoCapchaHereSection>
          </NotRobotCheckBoxSection>

          <CheckBoxSection>
            <CheckBoxDiv>
              <CheckBoxInput type="checkbox" name="concent" value="false" />
            </CheckBoxDiv>
            <div>
              <LabelExplanation>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </LabelExplanation>
            </div>
          </CheckBoxSection>

          <div>
            <SubmitButton type="submit">Sign up</SubmitButton>
          </div>

          <SignupExplanation>
            By clicking “Sign up”, you agree to our{' '}
            <Terms href="https://stackoverflow.com/legal/terms-of-service/public">
              terms of service
            </Terms>{' '}
            and acknowledge that you have read and understand our{' '}
            <Terms href="https://stackoverflow.com/legal/privacy-policy">
              privacy policy
            </Terms>
            and{' '}
            <Terms href="https://stackoverflow.com/conduct">
              code of conduct.
            </Terms>
          </SignupExplanation>
        </form>
      </StyledSignupForm>

      <StyledLoginTextSection>
        Are you an employer?{' '}
        <LogInClickSection href="">Log in</LogInClickSection>
      </StyledLoginTextSection>
    </div>
  );
};

export default SignupForm;

const StyledSignupForm = styled.div`
  width: 316px;
  height: 692px;
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

const Input = styled.input`
  border-radius: 3px;
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

const Explanation = styled.p`
  margin: 4px 0px;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-size: 12px;
  width: 100%;
`;

const CheckBoxSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CheckBoxDiv = styled.div`
  text-align: start;
`;

const CheckBoxInput = styled.input`
  width: 11px;
  height: 11px;
  border: 1px;
`;

const LabelExplanation = styled.label`
  font-size: 12px;
`;

const SignupExplanation = styled.div`
  margin-top: 32px;
  font-size: 12px;
`;
const Terms = styled.a`
  color: var(--blue-600);
  text-decoration-line: none;

  &:hover {
    color: var(--blue-500);
  }
`;

const NotRobotCheckBoxSection = styled.div`
  width: 100%;
  height: 156px;
  margin: 6px 0px;
  padding: 8px 0px 2px 0px;
  border: 1px;
  background-color: var(--black-050);
  display: flex;
  justify-content: center;
  text-align: center;
`;

const NoCapchaHereSection = styled.div`
  width: 156px;
  height: 136px;
  border: 1px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

const NoCapchaHereTop = styled.div`
  width: 147px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RobotLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
`;

const NoCapchaHereCheckBoxInput = styled.input`
  width: 24px;
  height: 24px;
  border: 2px;
`;

const NoCapchaHereLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
const Logo = styled.img`
  width: 24px;
  height: 24px;
`;
const NoCapchaHereBottom = styled.div`
  font-size: 8px;
`;

const PrivacyTerms = styled.div`
  display: flex;
  justify-content: center;
`;

const PrivacySection = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;

const TermsSection = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;

const StyledLoginTextSection = styled.div`
  width: 316px;
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
