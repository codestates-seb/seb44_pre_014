import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import EditQuestion from 'feature/Main/AskQuestion/EditQuestion';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

/*ContentContainer안에 컴포넌트 넣어서 페이지 구성 */

const EditPage = () => {
  const param = useParams();
  useEffect(() => {
    console.log(param.id);
    console.log('edit page');
  }, []);
  return (
    <div>
      <Header />
      <DivContainer>
        <ContentContainer>
          <EditQuestion id={param.id} />
        </ContentContainer>
      </DivContainer>
      <Footer />
    </div>
  );
};

export default EditPage;

const DivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--black-050);
`;
const ContentContainer = styled.div`
  margin-top: 50px;
  width: calc(100%-164px);
  width: 1100px;
`;
