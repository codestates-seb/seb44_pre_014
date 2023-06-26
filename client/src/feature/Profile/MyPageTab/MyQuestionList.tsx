import styled from 'styled-components';

const MyQuestionList = ({ questionList }) => {
  return (
    <StyledMyQuestionList>
      {questionList.length === 0 && (
        <NoneList>You have not asked any questions</NoneList>
      )}
      {questionList.map(({ questionId, solve, title, answers }) => (
        <QuestionsBox key={`question-list-item-${questionId}`}>
          <div className="icon-ques">{solve ? '✅' : '👾'}</div>
          <CountBox>{answers?.length}</CountBox>
          <a className="userdata-answer" href={`/questions/${questionId}`}>
            {title}
          </a>
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

const NoneList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 155px;
  color: var(--fc-light);
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
  padding: 12px;

  .userdata-answer {
    cursor: pointer;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    color: var(--blue-700);
    text-decoration: none;

    &:hover {
      color: var(--blue-500);
    }
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
