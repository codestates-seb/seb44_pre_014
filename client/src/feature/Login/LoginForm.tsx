import styled from 'styled-components';
import { useState } from 'react';
import API from 'services/api/index';
import { API_LOGIN } from 'services/api/key';
interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 로그인 요청을 서버로 보내는 로직
      const response = await API.POST({
        url: API_LOGIN,
        data: loginFormData,
      }).then((res) => {
        if (res.ok) {
          // accessToken : 응답 헤더
          // refreshToken : 응답 데이터
          const accessToken = res.headers.get('Authorization');
          const refreshToken = res.headers.get('Refresh');

          // 로컬스토리지에 토큰 저장
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          alert('login success!');
        }
      });
    } catch (error) {
      // 로그인 실패 처리
      alert('failed to login!');
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <StyledSignupForm>
        <form onSubmit={handleSubmit}>
          <LabelInputSection>
            <Label htmlFor="email">Email</Label>
            <div>
              <Input
                type="email"
                name="email"
                value={loginFormData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </LabelInputSection>

          <LabelInputSection>
            <Div>
              <Label htmlFor="password">Password</Label>
              <a href="">Forgot password?</a>
            </Div>

            <div>
              <Input
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </LabelInputSection>

          <div>
            <SubmitButton type="submit">Log in</SubmitButton>
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
