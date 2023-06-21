import React from 'react';
import styled from 'styled-components';
import VoteContainer from './VoteContainer';
import LabelContainer from './LabellContainer';
import { TQuestion } from 'utils/type';

type Tprops = {
  quData: TQuestion;
};

const DetailAnswer: React.FC<Tprops> = ({ quData }) => {
  return (
    <>
      <h3>2 Answer</h3>
      <AnswerContainer>
        <VoteContainer />
        <AnswerMain>
          <AnswerText>
            {quData.answers.map(({ answerId, content }) => (
              <p key={answerId}>{content}</p>
            ))}
          </AnswerText>
          <LabelContainer quData={quData} />
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
