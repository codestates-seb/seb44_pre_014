import React from 'react';
import styled from 'styled-components';

const MyQuestionList = ({ userData }) => {
  return (
    <>
      <QuestionsBox>
        {userData.questions[userData.questions.length - 1]?.title}
      </QuestionsBox>
      <QuestionsBox>
        {userData.questions[userData.questions.length - 2]?.title}
      </QuestionsBox>
      <QuestionsBox>
        {userData.questions[userData.questions.length - 3]?.title}
      </QuestionsBox>
    </>
  );
};

export default MyQuestionList;

const QuestionsBox = styled.div`
  width: 100%;
  height: 6rem;
  border-bottom: 0.5px solid var(--black-100);
  border-radius: 3px;
  padding-top: 35px;
  padding-left: 30px;
  font-size: 17px;
  color: var(--blue-700);
`;
