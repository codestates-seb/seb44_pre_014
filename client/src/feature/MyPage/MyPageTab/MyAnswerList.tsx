import React from 'react';
import styled from 'styled-components';
import { RiMessage2Fill } from 'react-icons/ri';

const MyAnswerList = ({ answerList }) => {
  return (
    <StyledMyAnswerList>
      {answerList.map(({ choose, content }) => (
        <AnswersBox>
          <RiMessage2Fill className="icon-info"></RiMessage2Fill>
          <CountBox>{choose ? '💌' : '✉️'}</CountBox>
          <div className="userdata-answer">{content}</div>
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
