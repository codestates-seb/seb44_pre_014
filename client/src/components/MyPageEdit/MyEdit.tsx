import styled from 'styled-components';
import Myinfo_nav from 'components/MyPage/Myinfo_nav';
import Myinfo_top from 'components/MyPage/Myinfo_top';
import Edit_main from './Edit_main';
import API from '../../services/api/index';
import { useState, useEffect } from 'react';

const MyEdit = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    content: '',
    created: '',
    modified: '',
  });
  const infourl = '/members/3';

  //따로 스토어 파서 저장하자.
  const requestUserInfo = async () => {
    try {
      const res = await API.GET(infourl);
      console.log(res);
      setUserData({
        username: res.data.username,
        email: res.data.email,
        content: res.data.content,
        created: res.data.createdAt,
        modified: res.data.modifiedAt,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestUserInfo();
  }, []);

  return (
    <MyPageContainer>
      <Myinfo_top userData={userData}></Myinfo_top>
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
