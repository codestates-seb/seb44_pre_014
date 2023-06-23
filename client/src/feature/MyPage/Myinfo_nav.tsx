import styled from 'styled-components';
import { useStoreTab } from 'store/tab/store.tab';

const Myinfo_nav = () => {
  const { tab, changeTab } = useStoreTab();

  const handleChangeTab = (tabId) => () => changeTab(tabId);

  return (
    <MenuContainer className="flex-space-between">
      <Menu
        className={`tab-item selected-${tab == 0}`}
        onClick={handleChangeTab(0)}
      >
        Profile
      </Menu>
      <Menu
        className={`tab-item selected-${tab == 1}`}
        onClick={handleChangeTab(1)}
      >
        Questions
      </Menu>
      <Menu
        className={`tab-item selected-${tab == 2}`}
        onClick={handleChangeTab(2)}
      >
        Answers
      </Menu>
      <Menu
        className={`tab-item selected-${tab == 3}`}
        onClick={handleChangeTab(3)}
      >
        Settings
      </Menu>
    </MenuContainer>
  );
};

export default Myinfo_nav;

const MenuContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

const Menu = styled.div`
  padding: 6px 12px;
  color: var(--black-600);
  font-size: 13px;
  cursor: pointer;
  border-radius: 1000px;

  :hover {
    background-color: var(--black-075);
  }

  &.selected-true {
    background-color: var(--orange);
    color: var(--white);

    &:hover {
      background-color: var(--orange-600);
    }
  }
`;
