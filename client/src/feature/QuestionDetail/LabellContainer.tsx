import { DetailButton } from 'components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import { TQuestion } from 'utils/type';

type Tprops = {
  quData: TQuestion;
  deleteQu?: (id: number, type: string) => void;
  id: number;
  updateQu: (id: number, type: string) => void;
  type: string;
};

const LabelContainer: React.FC<Tprops> = ({
  quData,
  deleteQu,
  id,
  updateQu,
  type,
}) => {
  const navigate = useNavigate();
  const onClickButton = () => navigate('/button');
  const handleEdit = () => {
    updateQu(id, type);
  };
  console.log(quData);
  return (
    quData && (
      <Label>
        <ButtonContainer>
          <DetailButton onClick={onClickButton}>Share</DetailButton>
          <DetailButton onClick={handleEdit}>Edit</DetailButton>
          <DetailButton onClick={() => deleteQu(id, type)}>Delete</DetailButton>
        </ButtonContainer>
        <UserInfo
          img={`http://teamdev.shop/members/${quData.memberId}/files`}
          site="/userinfo"
          name={quData.writer}
        />
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
