import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import styled from 'styled-components';

type TProps = {
  component: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ component }) => {
  return (
    <div>
      <Header />
      <DivContainer>
        <Sidebar />
        <ContentContainer>{component}</ContentContainer>
      </DivContainer>
      <Footer />
    </div>
  );
};

export default Layout;

const DivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1264px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  margin: 3.5em 0px 0px 0px;
  width: calc(100% - 164px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
