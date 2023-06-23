import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import AskQuestion from 'feature/Main/AskQuestion/AskQuestion';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

/*ContentContainer안에 컴포넌트 넣어서 페이지 구성 */

const AskPage = () => {
  const param = useParams();

  return (
    <div>
      <Header />
      <DivContainer>
        <ContentContainer>
          <AskQuestion id={param.id} />
        </ContentContainer>
      </DivContainer>
      <Footer />
    </div>
  );
};

export default AskPage;

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
