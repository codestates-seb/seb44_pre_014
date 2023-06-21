import styled from 'styled-components';
import Myinfo_side from './Myinfo_side';
import Myinfo_nav from './Myinfo_nav';
import Myinfo_main from './Myinfo_main';
import Myinfo_top from './Myinfo_top';

const Myinfo = () => {
  return (
    <MyPageContainer>
      <Myinfo_top />
      <MyPageBarSection>
        <Myinfo_nav></Myinfo_nav>
      </MyPageBarSection>
      <MyPageMainSection>
        <Myinfo_main></Myinfo_main>
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
