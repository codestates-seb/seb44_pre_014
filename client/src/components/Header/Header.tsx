import React from 'react';
import logo from '../../assets/mainlogo.png';
import sublogo from '../../assets/sublogo.png';
import styled from 'styled-components';
import { FaInbox, FaStackExchange } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { BsFillTrophyFill, BsFillQuestionCircleFill } from 'react-icons/bs';
import { useUserStore } from 'store/user/store.user';

const Header: React.FC = () => {
  const { memberId, setMemberId } = useUserStore();
  console.log(memberId);

  //나중에 로컬스토리지에서 받아오는 것으로 수정.
  const navigate = useNavigate();
  // const memberId = 1;
  const handleImgError = (e) => {
    e.target.src = 'https://i.ibb.co/gwgngJy/cutecat.jpg';
    //프로필이미지가 없을때 기본 프로필!
  };
  const moveToMain = () => {
    navigate('/');
  };
  const moveMyProfile = () => {
    navigate(`/profile/${memberId}`);
  };

  // 로그인 버튼 클릭했을 때
  const handleLogin = () => {
    navigate('/login');
  };
  // 로그아웃 버튼 클릭했을 때
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('memberId');
    setMemberId(null);
  };

  // 회원가입 버튼 클릭했을 때
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <StyledWrapper>
      <HeaderContainer>
        <LogoWrapper onClick={moveToMain}>
          <img src={logo} className="header-logo" />
          <img src={sublogo} className="header-sublogo"></img>
        </LogoWrapper>
        <ProductWrapper>Products</ProductWrapper>
        <SerachWrapper>
          <BiSearch className="search-icon" />
          <SerachBar placeholder="Search.." />
        </SerachWrapper>
        {memberId ? (
          <MyPageIcon onClick={moveMyProfile}>
            <img
              className="header-mypage"
              src={`http://teamdev.shop/members/${memberId}/files`}
              onError={handleImgError}
              width={30}
              height={30}
            />
          </MyPageIcon>
        ) : null}
        <IconWrapper>
          <Icon className="icon">
            <FaInbox size={20} />
          </Icon>
          <Icon className="icon">
            <BsFillTrophyFill size={20} />
          </Icon>
          <Icon className="icon">
            <BsFillQuestionCircleFill size={20} />
          </Icon>
          <Icon className="icon">
            <FaStackExchange size={20} />
          </Icon>
        </IconWrapper>
        <LoginWrapper>
          {!memberId && (
            <ButtonWrapper>
              <LoginLinkButton onClick={handleLogin}>Login</LoginLinkButton>
              <SignupLinkButton onClick={handleSignup}>Signup</SignupLinkButton>
            </ButtonWrapper>
          )}
          {memberId && (
            <LogoutLinkButton onClick={handleLogout}>Log out</LogoutLinkButton>
          )}
        </LoginWrapper>
      </HeaderContainer>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  top: 0;
  width: 100vw;
  position: fixed;
  height: 3.5rem;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top: 3px solid var(--orange-400);
  border-bottom: 1px solid var(--black-100);
  z-index: 100;
`;

const HeaderContainer = styled.div`
  position: sticky;
  width: 1250px;
  height: 100%;
  display: flex;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: auto;
  height: 100%;
  padding-top: 7px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .header-logo {
    width: 150px;
    height: 30px;
    @media (max-width: 900px) {
      display: none;
    }
  }
  .header-sublogo {
    width: 40px;
    height: 40px;
    display: none;
    @media (max-width: 900px) {
      display: flex;
    }
  }
`;

const ProductWrapper = styled.div`
  font-size: 13px;
  height: 30px;
  width: 100px;
  border-radius: 20px;
  text-align: center;
  margin: 1rem;
  margin-top: 1.3rem;
  padding: 5px;
  a {
    color: var(--black-100);
    text-decoration: none;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SerachWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--black-500);
  }
`;

const SerachBar = styled.input`
  width: 100%;
  height: 20px;
  border: 1px solid lightgray;
  border-radius: 2px;
  font-size: 13px;
  padding: 5px 30px;
`;

const MyPageIcon = styled.div`
  display: flex;
  font-size: 11px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 3px;
  padding-top: 10px;
  margin-left: 12px;
  padding-bottom: 14px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  img {
    border-radius: 3px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  color: var(--black-600);
  margin-left: 5px;
  padding-bottom: 13px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0rem;
  width: 2.5rem;
  height: 4rem;
  padding-top: 6px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  margin: 0px 10px;
  font-size: 13px;
  width: 150px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginLinkButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid var(--powder-700);
  border-radius: 4px;
  background-color: var(--blue-100);
  padding-left: 3px;
  padding-right: 3px;
  color: var(--powder-700);
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  :hover {
    background-color: var(--blue-200);
  }
`;

const SignupLinkButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid var(--powder-700);
  border-radius: 4px;
  background-color: var(--blue-500);
  padding-left: 3px;
  padding-right: 3px;
  color: var(--white);
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  :hover {
    background-color: var(--blue-700);
  }
`;

const LogoutLinkButton = styled.button`
  width: 70px;
  height: 30px;
  font-weight: bold;
  border: 1px solid skyblue;
  border-radius: 4px;
  box-shadow: 0px 0.5px 1px#dadce0 inset;
  border: 1px solid skyblue;
  background-color: var(--blue-500);
  margin: 5px;
  padding-left: 7px;
  padding-right: 7px;
  margin-bottom: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: var(--blue-600);
  }
`;
