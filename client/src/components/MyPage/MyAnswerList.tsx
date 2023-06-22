import React from 'react';
import styled from 'styled-components';

const MyAnswerList = ({ userData }) => {
  return (
    <>
      <AnswersBox>{userData.questions[0]}</AnswersBox>
      <AnswersBox>{userData.questions[1]}</AnswersBox>
      <AnswersBox>{userData.questions[2]}</AnswersBox>
    </>
  );
};

export default MyAnswerList;

const AnswersBox = styled.div`
  width: 100%;
  height: 6rem;
  border: 1px solid black;
`;
