import Profile from 'feature/Profile/Profile';
import styled from 'styled-components';

const ProfilePage = () => {
  return (
    <DivContainer>
      <ContentContainer>
        <Profile />
      </ContentContainer>
    </DivContainer>
  );
};

export default ProfilePage;

const DivContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 24px;
`;
