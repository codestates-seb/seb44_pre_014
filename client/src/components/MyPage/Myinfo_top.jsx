import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Myinfo_top = () => {
  const navigate = useNavigate();
  return (
    <ProfileContainer>
      <div className="profile-top">
        <Profile className="profile-img">승효</Profile>
        <ItemContainer>
          <div className="display-name">seunghyo</div>
          <UserTitle className="display-intro">
            Member for 9 days Last seen this week Visited 8 days, 3 consecutive
          </UserTitle>
        </ItemContainer>
        <ProfileBtnContainer>
          <div
            className="profile-edit-button"
            onClick={() => {
              navigate('/mypage/edit');
            }}
          >
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
const Profile = styled.div`
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
    width: 80px;
    height: 80px;
    font-size: 30px;
    padding-top: 16px;
    margin-bottom: 27px;
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
    padding-top: 3px;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 7em;
    margin: 3px;
    background-color: var(--white);
    border: 1px solid var(--black-500);
    border-radius: 3px;
  }
`;
const UserTitle = styled.div`
  min-height: 40px;
  font-size: 13px;
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
