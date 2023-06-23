import styled from 'styled-components';

const MyQuestionList = ({ questionList }) => {
  return (
    <StyledMyQuestionList>
      {questionList.map(({ solve, title, answers }) => (
        <QuestionsBox>
          <div className="icon-ques">{solve ? '✅' : '👾'}</div>
          <CountBox>{answers?.length}</CountBox>
          <div className="userdata-answer">{title}</div>
        </QuestionsBox>
      ))}
    </StyledMyQuestionList>
  );
};

export default MyQuestionList;

const StyledMyQuestionList = styled.div`
  border: 1px solid var(--black-100);
  border-radius: 5px;
`;

const QuestionsBox = styled.div`
  gap: 8px;
  text-align: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--black-075);
  border-radius: 3px;
  font-size: 15px;
  display: flex;
  color: var(--blue-700);
  padding: 12px;

  .userdata-answer {
    cursor: pointer;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }

  .icon-ques {
    width: 16px;
    height: 16px;
  }
`;

const CountBox = styled.div`
  display: flex;
  border: 1px solid var(--black-300);
  border-radius: 3px;
  min-width: 38px;
  height: 26px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: black;
`;
