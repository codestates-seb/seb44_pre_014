import styled from 'styled-components';
import MyAnswerList from './MyAnswerList';
import MyQuestionList from './MyQuestionList';

const MyPageTabProfile = ({ userData }) => {
  return (
    <StyledMyPageTabProfile>
      <SideContainer>
        <StatContainer>
          <StatTitle>Stats</StatTitle>
          <StatBox>
            <div className="answer-count">
              <div className="count">
                {userData ? userData.answers?.length : null}
              </div>
              answers
            </div>
            <div className="question-count">
              <div className="count">
                {userData ? userData.questions?.length : null}
              </div>
              questions
            </div>
          </StatBox>
        </StatContainer>
      </SideContainer>
      <InfoContainer>
        <MyQuestion>
          <StatTitle>Questions</StatTitle>
          <MyQuestionList questionList={userData.questions.slice(0, 3)} />
        </MyQuestion>
        <MyAnswer>
          <StatTitle>Answers</StatTitle>
          <MyAnswerList answerList={userData.answers.slice(0, 3)} />
        </MyAnswer>
      </InfoContainer>
    </StyledMyPageTabProfile>
  );
};

export default MyPageTabProfile;

const StyledMyPageTabProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SideContainer = styled.div`
  width: 25%;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StatContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 21px;
`;

const StatTitle = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 21px;

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

const StatBox = styled.div`
  display: flex;
  font-size: 17px;
  color: var(--black-600);
  padding: 12px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 3px;
  border: 1px solid var(--black-100);

  div {
    font-size: 13px;
  }

  .count {
    font-size: 18px;
    color: black;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MyQuestion = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyAnswer = styled.div`
  display: flex;
  flex-direction: column;
`;
