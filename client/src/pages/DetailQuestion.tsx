import styled from 'styled-components';
import VoteContainer from 'components/QuestionDetail/VoteContainer';
import DetailTitle from 'components/QuestionDetail/DetailTitle';
import DetailMainText from 'components/QuestionDetail/DetailMainText';
import DetailAnswerInput from 'components/QuestionDetail/DetailAnswerInput';
import DetailAnswer from 'components/QuestionDetail/DetailAnswer';
import LabelContainer from 'components/QuestionDetail/LabellContainer';

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
  return (
    <StyledDetailPage>
      <DetailTitle />
      <DetailMain>
        <VoteContainer />
        <MainContainer>
          <DetailMainText />
          <LabelContainer />
        </MainContainer>
      </DetailMain>
      <DetailAnswer />
      <DetailAnswerInput />
    </StyledDetailPage>
  );
}
