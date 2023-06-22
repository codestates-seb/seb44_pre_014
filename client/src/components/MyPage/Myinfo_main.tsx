import styled from 'styled-components';
import MyList from './MyAnswerList';
import MyAnswerList from './MyAnswerList';
import MyQuestionList from './MyQuestionList';

const Myinfo_main = ({ userData }) => {
  return (
    <MainContainer>
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
        <QuestionsBox>
          <MyQuestion>
            <MyQuestionList userData={userData}></MyQuestionList>
          </MyQuestion>
          <MyAnswer>
            <MyAnswerList userData={userData} />
          </MyAnswer>
        </QuestionsBox>
      </InfoContainer>
    </MainContainer>
  );
};

export default Myinfo_main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1300px) {
    padding-left: 30px;
    margin-right: 40px;
  }
`;

const SideContainer = styled.div`
  margin: 12px;
  margin-top: 23px;
  width: 25%;
  display: flex;
  border-radius: 3px;
  border: 1px solid var(--fc-light);
  max-height: 100px;
  @media (max-width: 800px) {
    display: none;
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
  padding: 8px;
  margin-left: 5px;
  @media (max-width: 900px) {
    font-size: 17px;
  }
`;

const StatBox = styled.div`
  display: flex;
  font-size: 17px;
  color: var(--black-600);
  padding: 5px;
  align-items: center;
  justify-content: center;
  div {
    margin: 0px 20px;
    font-size: 13px;
    @media (max-width: 900px) {
      font-size: 13px;
    }
  }
  .count {
    font-size: 18px;
    color: black;
  }
`;

const InfoContainer = styled.div`
  margin: 12px;
  display: flex;
  width: 75%;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const QuestionsBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MyQuestion = styled.div`
  display: flex;
  border: 1px solid var(--black-075);
  margin: 12px;
  border-radius: 3px;
  min-height: 100px;
  flex-direction: column;
`;

const MyAnswer = styled.div`
  display: flex;
  border: 1px solid var(--black-075);
  margin: 12px;
  border-radius: 3px;
  min-height: 100px;
  flex-direction: column;
`;
