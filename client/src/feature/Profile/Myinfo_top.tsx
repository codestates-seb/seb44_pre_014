import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserStore } from 'store/user/store.user';
import styled from 'styled-components';
import { PencilSvg } from './MyPageSvg';

const Myinfo_top = ({ userData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { memberId } = useUserStore();

  function DateFormat(now) {
    // 날짜 형식 변환
    const isoDateString = now;
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const Formated = `${year}-${month}-${day}`;
    return Formated;
  }

  function Diff(now, at) {
    // 현재 시간과 입력 시간과의 차이
    const startDate = new Date(now);
    const endDate = new Date(at);
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays + 1;
  }

  const now = DateFormat(new Date());
  const signin = DateFormat(userData?.modified); //회원가입 시간
  const modifiedWhen = DateFormat(userData?.created); // 회원정보 변경 시간

  const modifiedTime = Diff(now, modifiedWhen); // 정보수정후 얼마나 시간이 지났는지
  const since = Diff(now, signin); // 생성후 얼마나 시간이 지났는지

  const history = {
    // 회원관련 시간 정보
    signupDate: since,
    modified: modifiedTime,
  };

  return (
    <ProfileContainer>
      <Profile className="profile-img">
        <img src={`https://teamdev.shop/members/${id}/files`} />
      </Profile>
      <ItemContainer>
        <div className="display-name">
          {userData ? userData.username : null}
        </div>
        <UserContents>{userData ? userData.content : null}</UserContents>
        <UserContents>
          <div className="day-info">{`🎂 Member for ${history.signupDate} days`}</div>
          <div className="day-info">{`📝 Modified before ${
            history.modified - 1
          } days`}</div>
        </UserContents>
        <UserEmail className="display-intro">
          {userData ? userData.email : null}
        </UserEmail>
      </ItemContainer>
      {Number(memberId) === Number(id) && (
        <ProfileBtnContainer>
          <div
            className="profile-edit-button"
            onClick={() => {
              navigate(`/profile/edit/${id}`);
            }}
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
              <path d={PencilSvg}></path>
            </svg>
            Edit profile
          </div>
          {/* <div className="profile-detail-button">Profiles</div> */}
        </ProfileBtnContainer>
      )}
    </ProfileContainer>
  );
};

export default Myinfo_top;

const ProfileContainer = styled.section`
  display: flex;
  margin-bottom: 16px;
  position: relative;
  flex-wrap: wrap;
  column-gap: 16px;

  @media (max-width: 612px) {
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  position: relative;
  background-color: var(--orange);
  border-radius: 4px;
  text-align: center;
  color: white;
  font-size: 55px;
  width: 120px;
  height: 120px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 612px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
`;

const ProfileBtnContainer = styled.div`
  font-size: 12px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  gap: 6px;

  div {
    height: 35px;
    font-size: 12px;
    color: var(--black-500);
    padding: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: var(--white);
    border: 1px solid var(--black-300);
    border-radius: 3px;
    cursor: pointer;

    svg {
      margin-right: 2px;
    }
  }
`;

const UserEmail = styled.div`
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

  .day-info {
    font-size: 12px;
  }

  @media (max-width: 612px) {
    font-size: 11px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  .display-name {
    font-size: 34px;
    @media (max-width: 612px) {
      font-size: 25px;
    }
  }
`;
