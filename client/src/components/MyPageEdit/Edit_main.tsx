import { Profile } from 'feature/MyPage/Myinfo_top';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API from '../../services/api/index';
import styled from 'styled-components';

const Edit_main = () => {
  const [display, setDisplay] = useState('');
  const [about, setAbout] = useState('');
  const navigate = useNavigate();

  const changeName = (e: React.FormEvent<HTMLInputElement>) => {
    setDisplay(e.currentTarget.value);
  };

  const changeAbout = (e: React.FormEvent<HTMLInputElement>) => {
    setAbout(e.currentTarget.value);
  };

  const memberId = 3;
  const url = `/members/${memberId}/edit`;
  const editData = {
    username: display,
    content: about,
  };
  const newProfileEdit = async () => {
    try {
      const res = await API.PATCH({ url: url, data: editData });
      console.log(res);
      navigate('/');
      window.scrollTo({ top: 0 });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <div className="public-title">Public information</div>
      <TypeContainer>
        <TypeTitle>
          <div className="edit-image">Profile Image</div>
          <Profile></Profile>
        </TypeTitle>
        <TypeInput></TypeInput>
        <TypeTitle>
          Display name
          <input onChange={changeName} className="display-name"></input>
        </TypeTitle>
        <TypeTitle>
          About Me<input onChange={changeAbout} className="about-me"></input>
        </TypeTitle>
      </TypeContainer>
      <ButtonContainer>
        <SaveButton onClick={newProfileEdit}>Save Profile</SaveButton>
        <CancelButton
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0 });
          }}
        >
          Cancel
        </CancelButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default Edit_main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  .public-title {
    padding: 20px;
    font-size: 21px;
  }
`;

const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid var(--black-100);
  margin-bottom: 10px;
`;

const TypeTitle = styled.div`
  margin: 10px 30px;
  display: flex;
  font-size: 15px;
  font-weight: 600;
  flex-direction: column;
  .edit-image {
    margin-bottom: 6px;
    margin-left: 3px;
  }
  input {
    width: 50%;
    margin: 20px 0px;
    height: 30px;
  }
  .about-me {
    height: 100px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const SaveButton = styled.button`
  width: 10%;
  height: 30px;
  border: 1px solid var(--blue-400);
  border-radius: 4px;
  background-color: var(--blue-500);
  padding-left: 3px;
  padding-right: 3px;
  color: var(--white);
  font-weight: 600;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: var(--blue-700);
    border-color: var(--blue-500);
  }
`;

const CancelButton = styled.button`
  width: 10%;
  height: 30px;
  font-weight: bold;
  margin: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border: none;
  background-color: white;
  color: var(--blue-600);
  display: flex;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: aliceblue;
  }
`;

const TypeInput = styled.div``;
