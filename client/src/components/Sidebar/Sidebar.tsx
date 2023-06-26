import React from 'react';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { svgbag, svgstar } from './SidebarSvg';

const Sidebar: React.FC = () => {
  if (location.pathname.includes('/questions/write')) return null;
  if (location.pathname.includes('/login')) return null;
  return (
    <StyledWrapper>
      <ListContainer>
        <HomeContainer className="category">Home</HomeContainer>
        <PublicContainer className="category">
          PUBLIC
          <ul>
            <li>
              <FaGlobeAmericas size={15} /> Questions
            </li>
            <li className="list-li"> Tags</li>
            <li className="list-li"> Users</li>
            <li className="list-li"> Companies</li>
          </ul>
        </PublicContainer>
        <CollectiveContainer className="category">
          Collective
          <AiFillInfoCircle />
          <div className="menu">
            {' '}
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="rgb(242, 116, 13)"
            >
              <path d={svgstar}></path>
            </svg>
            <TextWrapper> Explore Collectives</TextWrapper>
          </div>
        </CollectiveContainer>
        <TeamsContainer className="category">
          Teams
          <AiFillInfoCircle />
          <div className="menu">
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="rgb(242, 116, 13)"
            >
              <path d={svgbag}></path>
            </svg>
            <TextWrapper>Create free Team</TextWrapper>
          </div>
        </TeamsContainer>
      </ListContainer>
    </StyledWrapper>
  );
};

export default Sidebar;

const StyledWrapper = styled.div`
  float: left;
  display: flex;
  height: auto;
  overflow: hidden;
  border-right: 1px solid var(--black-100);
  min-width: 164px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ListContainer = styled.div`
  padding-top: 70px;
  display: flex;
  width: 164px;
  height: 100vh;
  font-size: 11px;
  color: var(--fc-light);
  flex-direction: column;
  margin-left: auto;

  .category {
    width: 100%;
    text-align: start;
    padding: 8px 30px 20px 10px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  padding-left: 3px;
  :hover {
    color: var(--fc-dark);
  }
`;

const StickyContainer = styled.div`
  position: fixed;
  top: 65px;
  width: auto;
`;

const HomeContainer = styled.div`
  align-items: left;
  font-size: 13px;
  color: var(--black-900);
  :hover {
    color: var(--fc-dark);
  }
`;

const PublicContainer = styled.div`
  ul {
    list-style: none;
    padding: 8px 5px 8px 0;

    .list-li {
      padding-left: 33px;
    }
  }

  li {
    padding: 6px 0px;
    padding-left: 15px;
    font-size: 13px;
    :hover {
      color: var(--fc-dark);
    }
  }
`;

const CollectiveContainer = styled.div`
  .menu {
    padding: 6px 0;
    font-size: 13px;
    display: flex;
  }
`;

const TeamsContainer = styled.div`
  .menu {
    padding: 5px 0;
    font-size: 13px;
    display: flex;
  }
`;
