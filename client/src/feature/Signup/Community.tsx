import styled from 'styled-components';

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
                  d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                ></path>
                <path
                  fill="var(--blue-500)"
                  d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"
                ></path>
              </Svg>
            </SvgDiv>

            <div>Get unstuck — ask a question</div>
          </div>

          <div>
            <SvgDiv>
              <Svg width="26" height="26">
                <path
                  fill="var(--blue-500)"
                  d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"
                ></path>
                <path
                  fill="var(--blue-500)"
                  opacity=".5"
                  d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                ></path>
              </Svg>
            </SvgDiv>

            <div>Unlock new privileges like voting and commenting</div>
          </div>

          <div>
            <SvgDiv>
              <Svg>
                <path
                  fill="var(--blue-500)"
                  d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
                ></path>
                <path
                  fill="var(--blue-500)"
                  opacity=".5"
                  d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
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
                <path
                  fill="#4285F4"
                  d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"
                ></path>
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

  @media (min-height: 985px) {
    width: 100vw;
    height: 100vh;
  }
`;

const DivContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1264px;
  width: 100%;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;

  @media (max-width: 816px) {
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
