import React from 'react';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

const Sidebar: React.FC = () => {
  return (
    <StyledWrapper>
      <ListContainer>
        <StickyContainer>
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
                <path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path>
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
                <path d="M4 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 2 10.5v-5C2 4.67 2.67 4 3.5 4H4V3Zm5 1V3H5v1h4Z"></path>
              </svg>
              <TextWrapper>Create free Team</TextWrapper>
            </div>
          </TeamsContainer>
        </StickyContainer>
      </ListContainer>
    </StyledWrapper>
  );
};

export default Sidebar;

const StyledWrapper = styled.div`
  float: left;
  display: flex;
  height: auto;
  border-right: 1px solid var(--black-100);
  @media screen and (max-width: 800px) {
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
    padding: 10px 30px 20px 10px;
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
  top: 72px;
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
    padding: 8px 6px 8px 0;

    .list-li {
      padding-left: 33px;
    }
  }

  li {
    padding: 7px 0px;
    padding-left: 15px;
    font-size: 13px;
    :hover {
      color: var(--fc-dark);
    }
  }
`;

const CollectiveContainer = styled.div`
  .menu {
    padding: 9px 0;
    font-size: 13px;
    display: flex;
  }
`;

const TeamsContainer = styled.div`
  .menu {
    padding: 9px 0;
    font-size: 13px;
    display: flex;
  }
`;
