import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';
import QuestionList from 'feature/Main/QuestionList';
import { questionList } from 'feature/Main/mockData';
import { useEffect, useState } from 'react';
import API from 'services/api/index';
import { API_QUESTIONS } from 'services/api/key';

const MainPage = () => {
  const [questionLists, setQuestionList] = useState([]);

  const navigate = useNavigate();

  const onClickButton = () => navigate('/ask');

  const requestQuestionList = async () => {
    try {
      const res = await API.GET(API_QUESTIONS);
      setQuestionList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestQuestionList();
  }, []);

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
