import { Button } from 'components/Button/Button';
import React, { useEffect, useRef } from 'react';
import API from 'services/api/index';
import styled from 'styled-components';
import { API_ANSWER } from 'services/api/key';
import { TQuestion } from 'utils/type';

type Tprops = {
  id: number;
  questionId: number;
  quData: TQuestion;
};

const DetailAnswerInput: React.FC<Tprops> = ({ id, questionId, quData }) => {
  const textInputRef = useRef<HTMLTextAreaElement>(null);
  const answerArr = quData.answers.length;
  useEffect(() => {
    todoSubmitHandler;
  }, [answerArr]);

  const todoSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    console.log(enteredText);
    try {
      await API.POST({
        url: API_ANSWER,
        data: { content: enteredText, memberId: id, questionId: questionId },
      });
      console.log('전송완료');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AnswerContainer>
      <AnswerComment>
        <label htmlFor="answer-text">
          <h3>Your Answer</h3>
        </label>
        <textarea id="answer-text" ref={textInputRef} />
        <Button onClick={todoSubmitHandler}>Post Your Answer</Button>
      </AnswerComment>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.form`
  width: 100%;
  margin: 20px 5px;
`;

const AnswerComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  textarea {
    width: 700px;
    height: 300px;
    margin-bottom: 15px;
  }
`;
export default DetailAnswerInput;
