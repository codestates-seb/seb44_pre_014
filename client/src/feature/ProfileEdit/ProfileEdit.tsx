import styled from 'styled-components';
import Myinfo_nav from 'feature/Profile/Myinfo_nav';
import Myinfo_top from 'feature/Profile/Myinfo_top';
import API from '../../services/api/index';
import { useState, useEffect } from 'react';
import Edit_main from 'components/MyPageEdit/Edit_main';
import { API_MEMBER } from 'services/api/type';
import { useParams } from 'react-router-dom';

const ProfileEdit = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    content: '',
    created: '',
    modified: '',
  });

  const { id } = useParams();
  //따로 스토어 파서 저장하자.
  const requestUserInfo = async () => {
    try {
      const res = await API.GET(API_MEMBER(id));
      setUserData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestUserInfo();
  }, []);

  return (
    <MyPageContainer>
      <Myinfo_top userData={userData} />
      <Myinfo_nav />
      <EditContainer>
        <div className="edit-title">Edit Your Profile</div>
        <Edit_main userData={userData} />
      </EditContainer>
    </MyPageContainer>
  );
};

export default ProfileEdit;

const MyPageContainer = styled.main`
  font-size: 14px;
  width: calc(100%-200px);
  height: 100%;
`;

const EditContainer = styled.div`
  .edit-title {
    font-size: 27px;
    padding-bottom: 24px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--black-100);
  }
`;
