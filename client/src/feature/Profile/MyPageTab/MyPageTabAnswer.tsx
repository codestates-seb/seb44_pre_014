import styled from 'styled-components';
import MyAnswerList from './MyAnswerList';

const MyPageTabAnswer = ({ userData }) => {
  return (
    <StyledMyPageTabAnswer>
      <Title>Answers</Title>
      <MyAnswerList answerList={userData.answers} />
    </StyledMyPageTabAnswer>
  );
};

export default MyPageTabAnswer;

const StyledMyPageTabAnswer = styled.div``;

const Title = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 21px;

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
