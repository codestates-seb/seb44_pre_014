import React from 'react';
import styled from 'styled-components';
import VoteContainer from './VoteContainer';
import LabelContainer from './LabellContainer';

const DetailAnswer: React.FC = () => {
  return (
    <>
      <h3>2 Answer</h3>
      <AnswerContainer>
        <VoteContainer />
        <AnswerMain>
          <AnswerText>
            <p>maybe you can use eval(replace) to get the result of library</p>
          </AnswerText>
          <LabelContainer />
        </AnswerMain>
      </AnswerContainer>
    </>
  );
};

export default DetailAnswer;

const AnswerContainer = styled.section`
  display: flex;
`;

const AnswerText = styled.div`
  font-size: 16px;
  padding: 15px;
`;

const AnswerMain = styled.div`
  display: flex;
  flex-direction: column;
`;
