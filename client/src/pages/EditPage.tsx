import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import EditQuestion from 'feature/Main/AskQuestion/EditQuestion';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUserStore } from 'store/user/store.user';

/*ContentContainer안에 컴포넌트 넣어서 페이지 구성 */

const EditPage = () => {
  const param = useParams();
  const nav = useNavigate();
  const { memberId, isLoading } = useUserStore();

  useEffect(() => {
    if (isLoading && !memberId) {
      nav(-1);
    }
  }, []);

  return (
    <DivContainer>
      <ContentContainer>
        <EditQuestion id={param.id} />
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
