import styled from 'styled-components';

const Myinfo_main = () => {
  const memberId = 3;
  return (
    <MainContainer>
      <SideContainer>
        <StatContainer>
          <StatTitle>Stats</StatTitle>
          <StatBox>
            <div>answers</div>
            <div>questions</div>
          </StatBox>
        </StatContainer>
      </SideContainer>
      <InfoContainer>
        <QuestionsBox>
          <MyQuestion></MyQuestion>
          <MyAnswer>
            <AnswersBox>질문 1</AnswersBox>
            <AnswersBox>질문 2</AnswersBox>
            <AnswersBox>질문 3</AnswersBox>
            <AnswersBox>질문 4</AnswersBox>
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
`;

const StatTitle = styled.div`
  display: flex;
`;

const StatBox = styled.div`
  display: flex;
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
  background-color: var(--black-025);
  margin: 12px;
  border-radius: 3px;
  min-height: 100px;
`;

const AnswersBox = styled.div`
  width: 100%;
  height: 6rem;
  border: 1px solid black;
`;

const MyAnswer = styled.div`
  display: flex;
  border: 1px solid var(--black-075);
  background-color: var(--black-025);
  margin: 12px;
  border-radius: 3px;
  min-height: 100px;
  flex-direction: column;
`;
