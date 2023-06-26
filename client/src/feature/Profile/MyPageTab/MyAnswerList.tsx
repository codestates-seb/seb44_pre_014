import React from 'react';
import styled from 'styled-components';
import { RiMessage2Fill } from 'react-icons/ri';

const MyAnswerList = ({ answerList }) => {
  return (
    <StyledMyAnswerList>
      {answerList.length === 0 && (
        <NoneList>You have not answered any questions</NoneList>
      )}
      {answerList.map(({ choose, content, questionId }, index) => (
        <AnswersBox key={`answer-list-item-${index}`}>
          <RiMessage2Fill className="icon-info"></RiMessage2Fill>
          <CountBox>{choose ? '💌' : '✉️'}</CountBox>
          <a className="userdata-answer" href={`/questions/${questionId}`}>
            {content}
          </a>
        </AnswersBox>
      ))}
    </StyledMyAnswerList>
  );
};

export default MyAnswerList;

const StyledMyAnswerList = styled.div`
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

const AnswersBox = styled.div`
  gap: 8px;
  text-align: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--black-075);
  border-radius: 3px;
  font-size: 15px;
  display: flex;
  padding: 12px;
  color: var(--blue-700);

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

  .icon-info {
    min-width: 16px !important;
    height: 16px !important;
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
