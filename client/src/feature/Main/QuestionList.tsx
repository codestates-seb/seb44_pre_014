import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import { TQuestion } from 'utils/type';

type TProps = {
  questionList: TQuestion[];
};

const QuestionList: React.FC<TProps> = ({ questionList }) => {
  return (
    <StyledQuestionList>
      {questionList.map((question, idx) => (
        <QuestionCard key={`question-card-${idx}`} questionData={question} />
      ))}
    </StyledQuestionList>
  );
};

const StyledQuestionList = styled.div``;

export default QuestionList;
