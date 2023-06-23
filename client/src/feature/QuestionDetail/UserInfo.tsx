import React from 'react';
import styled from 'styled-components';

type UserProps = {
  name: string;
  img: string;
  site: string;
};

const UserInfo: React.FC<UserProps> = (props) => {
  return (
    <UserInfoContainer>
      <div>asked 13 mins ago</div>
      <UserDetail>
        <img src={props.img} />
        <UserFollow>
          <a href={props.site}>{props.name}</a>
          <span>23</span>
        </UserFollow>
      </UserDetail>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-right: 30px;
  font-size: 13px;
  margin-top: 10px;
  color: var(--black-500);
  /* background-color: #d9e9f7; */
  padding: 5px 6px 7px 7px;
  border-radius: 3px;
`;

const UserDetail = styled.div`
  display: flex;
  padding-top: 3px;

  p {
    margin-left: 0;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 5px;
    border-radius: 2px;
  }

  a {
    font-size: 12px;
    color: var(--blue-600);
    text-decoration: none;
    cursor: pointer;
  }
`;
const UserFollow = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 3px;
    font-weight: 600;
  }
`;
export default UserInfo;
