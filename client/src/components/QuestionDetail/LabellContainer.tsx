import { DetailButton } from 'components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import cat from '../../assets/images/cat.jpg';
import { TQuestion } from 'utils/type';

type Tprops = {
  quData: TQuestion;
};

const LabelContainer: React.FC<Tprops> = ({ quData }) => {
  const navigate = useNavigate();
  const onClickButton = () => navigate('/button');
  console.log(quData);
  return (
    quData && (
      <Label>
        <ButtonContainer>
          <DetailButton onClick={onClickButton}>Share</DetailButton>
          <DetailButton onClick={onClickButton}>Edit</DetailButton>
          <DetailButton onClick={onClickButton}>Delete</DetailButton>
        </ButtonContainer>
        <UserInfo img={cat} site="userinfo" name={quData.writer} />
      </Label>
    )
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 8px;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default LabelContainer;
