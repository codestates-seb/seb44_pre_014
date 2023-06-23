import styled from 'styled-components';
import ProfileEdit from 'feature/ProfileEdit/ProfileEdit';
import { useGetUserInfo } from 'store/userInfo/store.userInfo';
import { useNavigate, useParams } from 'react-router-dom';

const ProfileEditPage = () => {
  const userInfo = useGetUserInfo();
  const { id } = useParams();
  const navigate = useNavigate();

  if (userInfo.memberId !== Number(id)) navigate(`/profile/${id}`);
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
  max-width: 1100px;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  padding: 24px;
`;
