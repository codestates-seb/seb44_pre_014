import { DetailButton } from 'components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import cat from '../../assets/images/cat.jpg';
import { TQuestion } from 'utils/type';

type Tprops = {
  quData: TQuestion;
  deleteQu: (id: number) => void;
  id: number;
  updateQu: (id: number) => void;
};

const LabelContainer: React.FC<Tprops> = ({
  quData,
  deleteQu,
  id,
  updateQu,
}) => {
  const navigate = useNavigate();
  const onClickButton = () => navigate('/button');
  const handleEdit = () => {
    updateQu(id);
  };
  console.log(quData);
  return (
    quData && (
      <Label>
        <ButtonContainer>
          <DetailButton onClick={onClickButton}>Share</DetailButton>
          <DetailButton onClick={handleEdit}>Edit</DetailButton>
          <DetailButton onClick={() => deleteQu(id)}>Delete</DetailButton>
        </ButtonContainer>
        <UserInfo img={cat} site="/userinfo" name={quData.writer} />
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
