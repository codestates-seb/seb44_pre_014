import React from 'react';
import styled from 'styled-components';
import VoteContainer from './VoteContainer';
import LabelContainer from './LabellContainer';
import { TQuestion } from 'utils/type';

type Tprops = {
  quData: TQuestion;
  deleteQu: (id: number, type: string) => void;
  updateQu: (id: number) => void;
};

const DetailAnswer: React.FC<Tprops> = ({ quData, deleteQu, updateQu }) => {
  return (
    <>
      <h3>{quData.answers.length} Answer</h3>
      {quData.answers.map(({ answerId, content }) => (
        <AnswerContainer>
          <VoteContainer />
          <AnswerMain>
            <AnswerText>
              <p key={answerId}>{content}</p>
            </AnswerText>
            <LabelContainer
              quData={quData}
              deleteQu={deleteQu}
              id={answerId}
              updateQu={updateQu}
              type="answer"
            />
          </AnswerMain>
        </AnswerContainer>
      ))}
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
