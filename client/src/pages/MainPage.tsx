import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';
import QuestionList from 'feature/Main/QuestionList';
import { questionList } from 'feature/Main/mockData';

const MainPage = () => {
  const navigate = useNavigate();

  const onClickButton = () => navigate('/ask');

  return (
    <StyledMainPage>
      <MainTop>
        <Title>
          <TitleText>All Questions</TitleText>
          <Button onClick={onClickButton}>Ask Question</Button>
        </Title>
        <QuestionCount>
          {questionList.length.toLocaleString()} questions
        </QuestionCount>
      </MainTop>
      <QuestionList questionList={questionList} />
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  max-width: 728px;
`;

const MainTop = styled.div`
  padding: 24px 16px 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const TitleText = styled.div`
  font-size: 22px;
  line-height: 1.3;
  margin: 0 12px 12px 0;
`;

const QuestionCount = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`;

export default MainPage;
