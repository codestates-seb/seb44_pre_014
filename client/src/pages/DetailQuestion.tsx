import styled from 'styled-components';
import VoteContainer from 'feature/QuestionDetail/VoteContainer';
import DetailTitle from 'feature/QuestionDetail/DetailTitle';
import DetailMainText from 'feature/QuestionDetail/DetailMainText';
import DetailAnswerInput from 'feature/QuestionDetail/DetailAnswerInput';
import DetailAnswer from 'feature/QuestionDetail/DetailAnswer';
import LabelContainer from 'feature/QuestionDetail/LabellContainer';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import API from 'services/api/index';

const StyledDetailPage = styled.div`
  max-width: 1100px;
  padding: 24px 16px;
`;

const DetailMain = styled.div`
  width: 100%;
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

export default function DetailQuestion() {
  const { id } = useParams();
  const [quData, setQuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const navigate = useNavigate();

  //질문 수정하기

  //질문데이터 불러오기
  const requestQuestion = async () => {
    try {
      const res = await API.GET(`/api/questions/${id}`);
      setQuData(res.data);
      setIsLoading(false);
      console.log(quData);
    } catch (err) {
      console.log(err);
    }
  };

  // 질문글 삭제하기
  const deleteQuestion = async (id: number, type: string) => {
    try {
      if (type === 'question') {
        //질문삭제
        await API.DELETE({ url: `/api/questions/${id}` });
      } else {
        // 답변삭제
        await API.DELETE({ url: `/answers/${id}` });
      }
      navigate(`/`);
    } catch (err) {
      console.log(err);
    }
  };

  // 질문글 수정하기
  const updateQuestion = (id: number, type: string) => {
    if (type === 'question') {
      navigate(`/questions/edit/${id}`);
    } else {
      setSelectedAnswerId(id);
      setIsEdit(true);
    }
  };

  useEffect(() => {
    requestQuestion();
  }, [id]);

  return (
    !isLoading && (
      <StyledDetailPage>
        <DetailTitle quData={quData} />
        <DetailMain>
          <VoteContainer />
          <MainContainer>
            <DetailMainText quData={quData} />
            <LabelContainer
              type="question"
              quData={quData}
              deleteQu={deleteQuestion}
              id={quData.questionId}
              updateQu={updateQuestion}
            />
          </MainContainer>
        </DetailMain>
        <DetailAnswer
          quData={quData}
          deleteQu={deleteQuestion}
          updateQu={updateQuestion}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          selectedAnswerId={selectedAnswerId}
        />
        <DetailAnswerInput
          quData={quData}
          id={quData.memberId}
          questionId={quData.questionId}
        />
      </StyledDetailPage>
    )
  );
}
