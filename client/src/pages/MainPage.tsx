import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';
import QuestionList from 'feature/Main/QuestionList';
import { useEffect, useRef, useState } from 'react';
import API from 'services/api/index';
import { API_QUESTIONS } from 'services/api/key';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  const lastCardRef = useRef();

  const navigate = useNavigate();

  const onClickButton = () => navigate('/ask');

  const requestQuestionList = async () => {
    try {
      setIsLoading(true);
      const res = await API.GET(API_QUESTIONS(page));
      if (res.data.length == 0) setIsLast(true);
      setQuestionList([...questionList, ...res.data]);
      setPage(page + 1);
    } catch (err) {
      console.log(err);
      setQuestionList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestQuestionList();
  }, []);

  useIntersectionObserver({
    root: null,
    target: lastCardRef,
    enabled: !isLast,
    onIntersect: requestQuestionList,
  });

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
      <LastItemFlag ref={lastCardRef} />
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  max-width: 728px;
  position: relative;
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

const LastItemFlag = styled.div`
  bottom: 0;
  right: 0;
  left: 0;
  height: 100px;
  position: absolute;
`;
