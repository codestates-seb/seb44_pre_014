import styled from 'styled-components';
import VoteContainer from 'components/QuestionDetail/VoteContainer';
import DetailTitle from 'components/QuestionDetail/DetailTitle';
import DetailMainText from 'components/QuestionDetail/DetailMainText';
import { DetailButton } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import DetailAnswer from 'components/QuestionDetail/DetailAnswer';

const StyledDetailPage = styled.div`
  max-width: 1100px;
  padding: 24px 16px;
`;

const DetailMain = styled.div`
  width: 100%;
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 60px;
`;

export default function DetailQuestion() {
  const navigate = useNavigate();
  const onClickButton = () => navigate('/button');
  return (
    <StyledDetailPage>
      <DetailTitle />
      <DetailMain>
        <VoteContainer />
        <DetailMainText />
      </DetailMain>
      <ButtonContainer>
        <DetailButton onClick={onClickButton}>Share</DetailButton>
        <DetailButton onClick={onClickButton}>Edit</DetailButton>
        <DetailButton onClick={onClickButton}>Delete</DetailButton>
      </ButtonContainer>
      <DetailAnswer />
    </StyledDetailPage>
  );
}
