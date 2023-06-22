import React from 'react';
import styled from 'styled-components';

const MyQuestionList = ({ userData }) => {
  const len = userData.questions?.length;
  return (
    <>
      {len > 1 && (
        <QuestionsBox>
          <div className="icon-ques">
            {userData.questions[len - 1]?.solve ? '✅' : '👾'}
          </div>
          <CountBox>{userData.questions[len - 1]?.answers?.length}</CountBox>
          <div className="userdata-answer">
            {userData.questions[len - 1]?.title}
          </div>
        </QuestionsBox>
      )}
      {len > 2 && (
        <QuestionsBox>
          <div className="icon-ques">
            {userData.questions[len - 2]?.solve ? '✅' : '👾'}
          </div>
          <CountBox>{userData.questions[len - 2]?.answers?.length}</CountBox>
          <div className="userdata-answer">
            {userData.questions[len - 2]?.title}
          </div>
        </QuestionsBox>
      )}
      {len > 3 && (
        <QuestionsBox>
          <div className="icon-ques">
            {userData.questions[len - 3]?.solve ? '✅' : '👾'}
          </div>
          <CountBox>{userData.questions[len - 3]?.answers?.length}</CountBox>
          <div className="userdata-answer">
            {userData.questions[len - 3]?.title}
          </div>
        </QuestionsBox>
      )}
    </>
  );
};

export default MyQuestionList;

const QuestionsBox = styled.div`
  text-align: center;
  width: 100%;
  height: 6rem;
  border-bottom: 0.5px solid var(--black-100);
  border-radius: 3px;
  font-size: 17px;
  display: flex;
  color: var(--blue-700);
  .userdata-answer {
    overflow: hidden;
    padding-top: 40px;
    padding-left: 20px;
  }
  .icon-ques {
    margin-top: 40px;
    margin-left: 10px;
  }
`;

const CountBox = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  border: 1px solid var(--black-300);
  border-radius: 3px;
  margin-left: 10px;
  margin-top: 35px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  color: black;
  padding-top: 6px;
`;
