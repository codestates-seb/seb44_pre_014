import styled from 'styled-components';
import {
  svgGoogleBlue,
  svgGoogleGreen,
  svgGoogleOrange,
  svgGoogleRed,
  svgGithub,
  svgFacebook,
} from '../../assets/OauthSvg';

const Oauth = () => {
  return (
    <StyledOauthSection>
      <div>
        <Button
          bgColor="var(--white)"
          color="var(--black)"
          hoverBgColor="var(--black-025)"
        >
          <span>
            <SvgSection
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path fill="#4285F4" d={svgGoogleBlue}></path>
              <path fill="#34A853" d={svgGoogleGreen}></path>
              <path fill="#FBBC05" d={svgGoogleOrange}></path>
              <path fill="#EA4335" d={svgGoogleRed}></path>
            </SvgSection>
          </span>
          Sign up with Google
        </Button>
      </div>
      <div>
        <Button
          bgColor="var(--black)"
          color="var(--white)"
          hoverBgColor="var(--black-800)"
        >
          <span>
            <SvgSection
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path fill="currentColor" d={svgGithub}></path>
            </SvgSection>
          </span>
          Sign up with GitHub
        </Button>
      </div>
      <div>
        <Button bgColor="#385499" color="var(--white)" hoverBgColor="#314a86">
          <span>
            <SvgSection
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill="currentColor" d={svgFacebook}></path>
            </SvgSection>
          </span>
          Sign up with Facebook
        </Button>
      </div>
    </StyledOauthSection>
  );
};

export default Oauth;

const StyledOauthSection = styled.div`
  width: 316px;
  margin-bottom: 16px;
`;

type ButtonProps = {
  bgColor: string;
  color: string;
  hoverBgColor: string;
};
const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 39.5px;
  margin: 4px 0px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--black-100);
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
  }
`;

const SvgSection = styled.svg`
  width: 19px;
  height: 19px;
`;
