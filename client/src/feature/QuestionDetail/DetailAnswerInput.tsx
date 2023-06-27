import React, { useEffect, useRef } from 'react';
import API from 'services/api/index';
import styled from 'styled-components';
import { API_ANSWER } from 'services/api/key';
import { TQuestion } from 'utils/type';
import Button from 'components/Button/Button';
import { useUserStore } from 'store/user/store.user';
import { useNavigate } from 'react-router-dom';

type Tprops = {
  id: number;
  questionId: number;
  quData: TQuestion;
  timeStamp: number;
  setTimeStamp: React.Dispatch<React.SetStateAction<number>>;
};

const DetailAnswerInput: React.FC<Tprops> = ({
  id,
  questionId,
  quData,
  setTimeStamp,
  timeStamp,
}) => {
  const textInputRef = useRef<HTMLTextAreaElement>(null);
  const answerArr = quData.answers.length;
  const { memberId } = useUserStore();
  const navigator = useNavigate();

  useEffect(() => {
    todoSubmitHandler;
  }, [answerArr, timeStamp]);

  const todoSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    console.log(enteredText);
    if (memberId) {
      try {
        const res = await API.POST({
          url: API_ANSWER,
          data: { content: enteredText, memberId: id, questionId: questionId },
        });
        if (res.status !== 201) throw res;

        setTimeStamp(timeStamp + 1);
        textInputRef.current.value = '';

        console.log('전송완료');
      } catch (err) {
        console.error(err);
      }
    } else {
      navigator(`/login`);
      alert(`로그인 후 답변을 작성할 수 있습니다.`);
    }
  };
  return (
    <AnswerContainer>
      <AnswerComment>
        <label htmlFor="answer-text">
          <h3>Your Answer</h3>
        </label>
        <textarea
          id="answer-text"
          ref={textInputRef}
          placeholder="답변을 입력하세요"
        />
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
