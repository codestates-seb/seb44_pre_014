import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreMydata } from 'store/count/store.mydata';
import API from '../../services/api/index';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PencilSvg } from './MyPageSvg';

const Myinfo_top = ({ userData }) => {
  const navigate = useNavigate();
  const { myname, myemail, mycontent } = useStoreMydata();

  return (
    <ProfileContainer>
      <div className="profile-top">
        <Profile className="profile-img">
          {' '}
          {userData ? userData.username?.slice(0, 2) : null}
        </Profile>
        <ItemContainer>
          <div className="display-name">
            {userData ? userData.username : null}
          </div>
          <UserContents>{userData ? userData.content : null}</UserContents>
          <UserEmail className="display-intro">
            {userData ? userData.email : null}
          </UserEmail>
        </ItemContainer>
        <ProfileBtnContainer>
          <div
            className="profile-edit-button"
            onClick={() => {
              navigate('/mypage/edit');
            }}
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
              <path d={PencilSvg}></path>
            </svg>
            Edit profile
          </div>
          <div className="profile-detail-button">Profiles</div>
        </ProfileBtnContainer>
      </div>
    </ProfileContainer>
  );
};

export default Myinfo_top;

const ProfileContainer = styled.section`
  padding: 10px;
  margin-left: 40px;
  position: relative;
  margin-bottom: 10px;
  @media (max-width: 612px) {
    width: 500px;
  }
  .profile-top {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .profile-top > img {
    border-radius: 10px;
  }
`;
export const Profile = styled.div`
  padding-top: 18px;
  padding-bottom: 7px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: var(--orange);
  margin-right: 2px;
  margin-left: 4px;
  border-radius: 4px;
  text-align: center;
  color: white;
  font-size: 55px;
  width: 120px;
  height: 120px;
  margin-top: 10px;
  @media (max-width: 612px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
const ProfileBtnContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 215px;
  font-size: 12px;
  display: flex;
  div {
    color: var(--black-500);
    padding-top: 6px;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 2.5rem;
    margin: 3px;
    background-color: var(--white);
    border: 1px solid var(--black-500);
    border-radius: 3px;
    svg {
      margin-right: 2px;
    }
  }
  .profile-detail-button {
    padding-top: 12px;
    width: 30%;
  }
  .profile-edit-button {
    width: 50%;
  }
`;
const UserEmail = styled.div`
  min-height: 40px;
  font-size: 13px;
  color: var(--black-500);
  @media (max-width: 612px) {
    font-size: 11px;
  }
`;

const UserContents = styled.div`
  margin: 0;
  font-size: 15px;
  color: var(--black-500);
  @media (max-width: 612px) {
    font-size: 11px;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 500px;
  padding: 10px;
  margin: 10px;
  .display-name {
    font-size: 34px;
    @media (max-width: 612px) {
      font-size: 25px;
    }
  }
`;
