import styled from 'styled-components';
import ProfileEdit from 'feature/ProfileEdit/ProfileEdit';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserStore } from 'store/user/store.user';

const ProfileEditPage = () => {
  const { memberId } = useUserStore();
  const { id } = useParams();
  const navigate = useNavigate();

  if (Number(memberId) !== Number(id)) navigate(`/profile/${id}`);
  return (
    <StyledProfileEditPage>
      <ContentContainer>
        <ProfileEdit />
      </ContentContainer>
    </StyledProfileEditPage>
  );
};

export default ProfileEditPage;

const StyledProfileEditPage = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 24px;
`;
