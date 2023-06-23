import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MyEdit from 'components/MyPageEdit/MyEdit';
import Sidebar from 'components/Sidebar/Sidebar';
import styled from 'styled-components';

/*ContentContainer안에 컴포넌트 넣어서 페이지 구성 */

const MyPageEdit = () => {
  return (
    <div>
      <Header />
      <DivContainer>
        <Sidebar />
        <ContentContainer>
          <MyEdit />
        </ContentContainer>
      </DivContainer>
      <Footer />
    </div>
  );
};

export default MyPageEdit;

const DivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContentContainer = styled.div`
  padding: 24px;
  margin: 70px 0px 0px 0px;
  width: calc(100%-164px);
  width: 1100px;
`;
