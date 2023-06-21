import styled from 'styled-components';

const Myinfo_main = () => {
  return <MainContainer>main</MainContainer>;
};

export default Myinfo_main;

const MainContainer = styled.div`
  width: 100%;
  background-color: red;
  @media (max-width: 1300px) {
    padding-left: 30px;
    margin-right: 40px;
  }
`;
