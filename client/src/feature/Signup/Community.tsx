import styled from 'styled-components';
import {
  svgQuestionFront,
  svgQuestionBack,
  svgVoteCommentFront,
  svgVoteCommentBack,
  svgMoreFront,
  svgMoreBack,
  svgBadges,
} from './CommunitySvg';

const Community = () => {
  return (
    <StyledCommunitySection>
      <DivContent>
        <LeftDiv>
          <h1>Join the Stack Overflow community</h1>
          <div>
            <SvgDiv>
              <Svg>
                <path
                  fill="var(--blue-500)"
                  opacity=".5"
                  d={svgQuestionBack}
                ></path>
                <path fill="var(--blue-500)" d={svgQuestionFront}></path>
              </Svg>
            </SvgDiv>

            <div>Get unstuck — ask a question</div>
          </div>

          <div>
            <SvgDiv>
              <Svg width="26" height="26">
                <path fill="var(--blue-500)" d={svgVoteCommentBack}></path>
                <path
                  fill="var(--blue-500)"
                  opacity=".5"
                  d={svgVoteCommentFront}
                ></path>
              </Svg>
            </SvgDiv>

            <div>Unlock new privileges like voting and commenting</div>
          </div>

          <div>
            <SvgDiv>
              <Svg>
                <path fill="var(--blue-500)" d={svgMoreBack}></path>
                <path
                  fill="var(--blue-500)"
                  opacity=".5"
                  d={svgMoreFront}
                ></path>
              </Svg>
            </SvgDiv>
            <div>
              Save your favorite questions, answers, watch tags, and more
            </div>
          </div>

          <div>
            <SvgDiv>
              <Svg>
                <path fill="#4285F4" d={svgBadges}></path>
              </Svg>
            </SvgDiv>
            <div>Earn reputation and badges</div>
          </div>

          <div>
            <div>
              Collaborate and share knowledge with a private group for FREE.
            </div>
            <FreeUsers href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
              Get Stack Overflow for Teams free for up to 50 users
            </FreeUsers>
          </div>
        </LeftDiv>
      </DivContent>
    </StyledCommunitySection>
  );
};

export default Community;

const StyledCommunitySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const DivContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;

  @media (max-width: 1024px) {
    display: none;
  }
  > h1 {
    font-size: 27px;
    font-weight: 500;
    line-height: 27px;
    text-align: left;
    letter-spacing: normal;

    margin-bottom: 32px;
    color: var(--black);
  }
  > div:not(:last-child) {
    display: flex;

    font-size: 15px;
    line-height: 19px;

    margin: 0px 0px 24px 0px;
  }
  > div:last-child {
    font-size: 13px;
    color: #6a737c;
  }
`;

const SvgDiv = styled.div`
  margin-right: 10px;
  width: 30px;
  text-align: center;
`;

const Svg = styled.svg`
  width: 26px;
  height: 26px;
`;

const FreeUsers = styled.a`
  text-decoration-line: none;
  color: var(--blue-500);
`;
