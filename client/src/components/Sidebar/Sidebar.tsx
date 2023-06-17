import React from 'react';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

const Sidebar: React.FC = () => {
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
            <li>Tags</li>
            <li>Users</li>
            <li>Companies</li>
          </ul>
        </PublicContainer>
        <CollectiveContainer className="category">
          Collective
          <AiFillInfoCircle />
        </CollectiveContainer>
        <TeamsContainer className="category">
          Teams
          <AiFillInfoCircle />
        </TeamsContainer>
      </ListContainer>
    </StyledWrapper>
  );
};

export default Sidebar;

const StyledWrapper = styled.div`
  float: left;
  display: flex;
  width: 18%;
  height: 100vh;
  border-right: 1px solid var(--black-100);
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const ListContainer = styled.div`
  padding-top: 70px;
  display: flex;
  width: 170px;
  height: 100vh;
  font-size: 11px;
  color: var(--fc-light);
  flex-direction: column;
  margin-left: auto;
  .category {
    width: 100%;
    text-align: start;
    padding: 10px 30px 20px 10px;
  }
`;

const HomeContainer = styled.div`
  align-items: left;
  font-size: 13px;
`;

const PublicContainer = styled.div`
  ul {
    list-style: none;
  }

  li {
    padding: 5px 0px;
    font-size: 13px;
  }
`;

const CollectiveContainer = styled.div``;

const TeamsContainer = styled.div``;
