import styled from 'styled-components';
import ProfileEdit from 'feature/ProfileEdit/ProfileEdit';

const ProfileEditPage = () => {
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
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  padding: 24px;
  width: 1100px;
`;
