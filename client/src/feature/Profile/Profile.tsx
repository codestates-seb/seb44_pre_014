import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Myinfo_nav from './Myinfo_nav';
import API from '../../services/api/index';
import Myinfo_top from './Myinfo_top';
import { API_MEMBER } from 'services/api/type';
import { useParams } from 'react-router-dom';
import { useStoreTab } from 'store/tab/store.tab';
import MyPageTabProfile from './MyPageTab/MyPageTabProfile';
import MyPageTabQuestion from './MyPageTab/MyPageTabQuestion';
import MyPageTabAnswer from './MyPageTab/MyPageTabAnswer';

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    content: '',
    created: '',
    modified: '',
    questions: [],
    answers: [],
  });
  const { tab } = useStoreTab();

  const requestUserInfo = async () => {
    try {
      const res = await API.GET(API_MEMBER(id));
      console.log(res);
      setUserData({
        username: res.data.username,
        email: res.data.email,
        content: res.data.content,
        created: res.data.createdAt,
        modified: res.data.modifiedAt,
        questions: res.data.questions,
        answers: res.data.answers,
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
      <Myinfo_top userData={userData} />
      <Myinfo_nav />
      {tab == 0 && <MyPageTabProfile userData={userData} />}
      {tab == 1 && <MyPageTabQuestion userData={userData} />}
      {tab == 2 && <MyPageTabAnswer userData={userData} />}
    </MyPageContainer>
  );
};

export default Profile;

const MyPageContainer = styled.main`
  font-size: 14px;
  width: 100%;
  height: 100%;
`;
