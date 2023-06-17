import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import styled from 'styled-components';

/*ContentContainer안에 컴포넌트 넣어서 페이지 구성 */

const MainPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <ContentContainer>contents</ContentContainer>
      <Footer />
    </div>
  );
};

export default MainPage;

const ContentContainer = styled.div`
  padding: 60px 0px 0px 0px;
  float: center;
  height: 100vh;
  background-color: beige;
  overflow: scroll;
`;
