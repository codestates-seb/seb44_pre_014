import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Myinfo_nav from './Myinfo_nav';
import Myinfo_main from './Myinfo_main';
import API from '../../services/api/index';
import Myinfo_top from './Myinfo_top';

const Myinfo = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    content: '',
    created: '',
    modified: '',
    questions: [],
    answers: [],
  });

  const memberId = 3;
  const infourl = `/members/${memberId}`;

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
      <MyPageBarSection>
        <Myinfo_nav></Myinfo_nav>
      </MyPageBarSection>
      <MyPageMainSection>
        <Myinfo_main userData={userData} />
      </MyPageMainSection>
    </MyPageContainer>
  );
};

export default Myinfo;

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
