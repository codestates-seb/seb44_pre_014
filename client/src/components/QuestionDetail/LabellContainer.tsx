import { DetailButton } from 'components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import cat from '../../assets/images/cat.jpg';

const LabelContainer: React.FC = () => {
  const navigate = useNavigate();
  const onClickButton = () => navigate('/button');
  return (
    <Label>
      <ButtonContainer>
        <DetailButton onClick={onClickButton}>Share</DetailButton>
        <DetailButton onClick={onClickButton}>Edit</DetailButton>
        <DetailButton onClick={onClickButton}>Delete</DetailButton>
      </ButtonContainer>
      <UserInfo img={cat} site="userinfo" name="carama" />
    </Label>
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
