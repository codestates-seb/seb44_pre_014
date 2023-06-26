import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import EditQuestion from 'feature/Main/AskQuestion/EditQuestion';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/*ContentContainer안에 컴포넌트 넣어서 페이지 구성 */

const EditPage = () => {
  const param = useParams();
  const nav = useNavigate();
  /*
  const membersId = 내가 로그인한 멤버 아이디
  useEffect(() => {
    if (!membersId) {
      nav('/login');
    }
  }, [membersId]); */
  const membersId = 1; //일단 임의로 아무 아이디나 넣기
  return (
    <DivContainer>
      <ContentContainer>
        <EditQuestion id={param.id} myId={membersId} />
      </ContentContainer>
    </DivContainer>
  );
};

export default EditPage;

const DivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContentContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;
