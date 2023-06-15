import styled from 'styled-components';
import QuestionCard from 'feature/Main/QuestionCard';
import { questionList } from 'feature/Main/mockData';

const MainPage = () => {
  return (
    <StyledMainPage>
      {questionList.map((question, idx) => (
        <QuestionCard key={`question-card-${idx}`} questionData={question} />
      ))}
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  max-width: 728px;
`;

export default MainPage;
