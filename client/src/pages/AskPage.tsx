import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import AskQuestion from 'feature/Main/AskQuestion/AskQuestion';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserStore } from 'store/user/store.user';

/*ContentContainer안에 컴포넌트 넣어서 페이지 구성 */

const AskPage = () => {
  // 멤버 아이디를 파람으로 받아오기. 해당 멤버가 글을 쓰는 것으로 처리 , 아님 로컬 스토리지에서 멤버 아이디 받아옴.
  //멤버 아이디가 없다면 로그인 페이지로 이동하게 구현할것.
  const nav = useNavigate();
  const { memberId, isLoading } = useUserStore();
  useEffect(() => {
    if (isLoading && !memberId) {
      nav('/login');
    }
  }, []);

  return (
    <DivContainer>
      <ContentContainer>
        <AskQuestion id={memberId} />
      </ContentContainer>
    </DivContainer>
  );
};

export default AskPage;

const DivContainer = styled.div`
  height: 100%;
  display: flex;
`;
const ContentContainer = styled.div`
  margin-top: 50px;
`;
