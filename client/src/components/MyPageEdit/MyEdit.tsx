import styled from 'styled-components';
import Myinfo_nav from 'components/MyPage/Myinfo_nav';
import Myinfo_top from 'components/MyPage/Myinfo_top';
import Edit_main from './Edit_main';

const MyEdit = () => {
  return (
    <MyPageContainer>
      <Myinfo_top></Myinfo_top>
      <MyPageBarSection>
        <Myinfo_nav></Myinfo_nav>
      </MyPageBarSection>
      <MyPageMainSection>
        <EditContainer>
          <div className="edit-title">Edit Your Profile</div>
          <Edit_main />
        </EditContainer>
      </MyPageMainSection>
    </MyPageContainer>
  );
};

export default MyEdit;

const MyPageContainer = styled.main`
  font-size: 14px;
  width: calc(100%-200px);
  height: 100%;
`;
const MyPageBarSection = styled.section`
  padding-left: 20px;
`;
const MyPageMainSection = styled.section`
  padding-top: 15px;
  padding-left: 20px;
`;

const EditContainer = styled.div`
  .edit-title {
    font-size: 27px;
    padding: 20px 20px;
    border-bottom: 1px solid var(--black-100);
  }
`;
