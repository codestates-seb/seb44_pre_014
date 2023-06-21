import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  margin: 0px 15px;
  .myinfo-selected {
    background-color: var(--orange);
    color: var(--white);
  }
`;
const Menu = styled.div`
  padding: 5px;
  border-radius: 15px;
  margin-left: 15px;
  color: var(--black-600);
  :hover {
    background-color: var(--black-075);
  }
`;

const Myinfo_nav = () => {
  return (
    <MenuContainer className="flex-space-between">
      <Menu className="myinfo-selected">Profile</Menu>
      <Menu>Activity</Menu>
      <Menu>Saves</Menu>
      <Menu>Settings</Menu>
    </MenuContainer>
  );
};
export default Myinfo_nav;
