import { Button } from 'components/Button/Button';
import React, { useRef } from 'react';
import styled from 'styled-components';

const AnswerContainer = styled.form`
  width: 100%;
  margin: 20px 70px;
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

const DetailAnswer: React.FC = () => {
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    console.log(enteredText);
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

export default DetailAnswer;
