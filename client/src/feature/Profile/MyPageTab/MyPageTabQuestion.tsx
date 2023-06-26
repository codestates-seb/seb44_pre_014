import styled from 'styled-components';
import MyQuestionList from './MyQuestionList';

const MyPageTabQuestion = ({ userData }) => {
  return (
    <StyledMyPageTabQuestion>
      <Title>Questions</Title>
      <MyQuestionList questionList={userData.questions} />
    </StyledMyPageTabQuestion>
  );
};

export default MyPageTabQuestion;

const StyledMyPageTabQuestion = styled.div``;

const Title = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 21px;

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
