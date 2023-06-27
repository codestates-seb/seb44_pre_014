import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';
import QuestionList from 'feature/Main/QuestionList';
import { useRef, useState } from 'react';
import API from 'services/api/index';
import { API_QUESTIONS } from 'services/api/key';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

const MainPage = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    totalCount: 0,
    count: 0,
    totalPage: -1,
    currentPage: 0,
  });

  const lastCardRef = useRef();

  const navigate = useNavigate();

  const onClickButton = () => navigate('/questions/write');

  const requestQuestionList = async () => {
    try {
      setIsLoading(true);
      const res = await API.GET(API_QUESTIONS(pageInfo.currentPage + 1));
      if (res.status !== 200) throw res;

      setQuestionList([...questionList, ...res.data.contents]);
      setPageInfo(res.data.info);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setQuestionList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useIntersectionObserver({
    root: null,
    target: lastCardRef,
    enabled:
      !isLoading && !isError && pageInfo.totalPage != pageInfo.currentPage,
    onIntersect: requestQuestionList,
  });

  return (
    <StyledMainPage>
      <MainTop>
        <Title>
          <TitleText>All Questions</TitleText>
          <Button onClick={onClickButton}>Ask Question</Button>
        </Title>
        <QuestionCount>{pageInfo.totalCount} questions</QuestionCount>
      </MainTop>
      <QuestionList questionList={questionList} />
      <LastItemFlag ref={lastCardRef} />
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  max-width: 1100px;
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
