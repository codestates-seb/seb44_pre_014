import DetailButton from 'components/Button/DetailButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import { TQuestion } from 'utils/type';
import { useUserStore } from 'store/user/store.user';

type Tprops = {
  quData: TQuestion;
  deleteQu?: (id: number, type: string) => void;
  id: number;
  updateQu: (id: number, type: string) => void;
  type: string;
  handleEdit?: (answerId: number) => void;
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
  const { memberId } = useUserStore();
  const handleEdit = () => {
    updateQu(id, type);
  };
  const handleDelete = () => {
    deleteQu(id, type);
  };

  return (
    quData && (
      <Label>
        <ButtonContainer>
          <DetailButton onClick={onClickButton}>Share</DetailButton>
          {Number(memberId) === quData.memberId && (
            <>
              <DetailButton onClick={handleEdit}>Edit</DetailButton>
              <DetailButton onClick={handleDelete}>Delete</DetailButton>
            </>
          )}
        </ButtonContainer>
        <UserInfo
          img={`http://teamdev.shop/members/${quData.memberId}/files`}
          site={`/profile/${quData.memberId}`}
          name={quData.writer}
          createdAt={quData.createdAt}
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
