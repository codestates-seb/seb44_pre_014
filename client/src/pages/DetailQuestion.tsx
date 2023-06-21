import styled from 'styled-components';
import VoteContainer from 'components/QuestionDetail/VoteContainer';
import DetailTitle from 'components/QuestionDetail/DetailTitle';
import DetailMainText from 'components/QuestionDetail/DetailMainText';
import DetailAnswerInput from 'components/QuestionDetail/DetailAnswerInput';
import DetailAnswer from 'components/QuestionDetail/DetailAnswer';
import LabelContainer from 'components/QuestionDetail/LabellContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import api from 'services/api';

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
  flex-direction: column;
`;

export default function DetailQuestion() {
  const { id } = useParams();
  const [quData, setQuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const requestQuestion = async () => {
    try {
      const res = await api.GET(`/questions/${id}`);
      setQuData(res.data);
      console.log(res.data.writer);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
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
            <LabelContainer quData={quData} />
          </MainContainer>
        </DetailMain>
        <DetailAnswer quData={quData} />
        <DetailAnswerInput />
      </StyledDetailPage>
    )
  );
}
