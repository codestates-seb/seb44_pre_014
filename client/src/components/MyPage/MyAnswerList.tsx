import React from 'react';
import styled from 'styled-components';
import { RiMessage2Fill } from 'react-icons/ri';

const MyAnswerList = ({ userData }) => {
  const len = userData.answers?.length;
  return (
    <>
      {len > 1 && (
        <AnswersBox>
          <RiMessage2Fill className="icon-info"></RiMessage2Fill>
          <CountBox>{userData.answers[len - 1]?.choose ? '💌' : '✉️'}</CountBox>
          <div className="userdata-answer">
            {userData.answers[len - 1]?.content.slice(0, 20)}
          </div>
        </AnswersBox>
      )}
      {len > 2 && (
        <AnswersBox>
          <RiMessage2Fill className="icon-info"></RiMessage2Fill>
          <CountBox>{userData.answers[len - 2]?.choose ? '💌' : '✉️'}</CountBox>
          <div className="userdata-answer">
            {userData.answers[len - 2]?.content.slice(0, 20)}
          </div>
        </AnswersBox>
      )}
      {len > 3 && (
        <AnswersBox>
          <RiMessage2Fill className="icon-info"></RiMessage2Fill>
          <CountBox>{userData.answers[len - 3]?.choose ? '💌' : '✉️'}</CountBox>
          <div className="userdata-answer">
            {userData.answers[userData.answers.length - 3]?.content.slice(
              0,
              20
            )}
          </div>
        </AnswersBox>
      )}
    </>
  );
};

export default MyAnswerList;

const AnswersBox = styled.div`
  text-align: center;
  width: 100%;
  height: 6rem;
  border-bottom: 0.5px solid var(--black-100);
  border-radius: 3px;
  font-size: 17px;
  display: flex;
  color: var(--blue-700);
  .userdata-answer {
    padding-top: 40px;
    margin-left: 70px;
  }
  .icon-info {
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
