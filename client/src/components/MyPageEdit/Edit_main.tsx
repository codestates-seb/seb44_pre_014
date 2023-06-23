import { Profile } from 'feature/Profile/Myinfo_top';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import API from '../../services/api/index';
import styled from 'styled-components';
import { API_MEMBER_EDIT } from 'services/api/type';

const Edit_main = ({ userData }) => {
  const { id } = useParams();
  const [display, setDisplay] = useState(userData.username);
  const [about, setAbout] = useState(userData.content);
  const navigate = useNavigate();

  useEffect(() => {
    setDisplay(userData.username);
    setAbout(userData.content);
  }, [userData]);

  const onSubmitForm = async (event) => {
    try {
      event.preventDefault();

      const editData = {
        username: display,
        content: about,
      };
      const res = await API.PATCH({
        url: API_MEMBER_EDIT(id),
        data: editData,
      });
      console.log(res);
      navigate(`/profile/${id}`);
      window.scrollTo({ top: 0 });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeForm = (event) => {
    if (event.target.id === 'display') setDisplay(event.target.value);
    else if (event.target.id === 'about') setAbout(event.target.value);
  };

  return (
    <StyledEditContainer>
      <form onSubmit={onSubmitForm} onChange={onChangeForm}>
        <div className="public-title">Public information</div>
        <EditBoxContainer>
          <ItemContainer>
            <Title>Profile Image</Title>
            <Profile />
          </ItemContainer>
          <ItemContainer>
            <Title>Display name</Title>
            <Input id="display" value={display} className="display-name" />
          </ItemContainer>
          <ItemContainer>
            <Title>About Me</Title>
            <TextArea id="about" value={about} className="about-me" />
          </ItemContainer>
        </EditBoxContainer>
        <ButtonContainer>
          <SaveButton type="submit">Save Profile</SaveButton>
          <CancelButton
            onClick={() => {
              navigate(`/profile/${id}`);
              window.scrollTo({ top: 0 });
            }}
          >
            Cancel
          </CancelButton>
        </ButtonContainer>
      </form>
    </StyledEditContainer>
  );
};

export default Edit_main;

const StyledEditContainer = styled.div`
  display: flex;
  flex-direction: column;

  .public-title {
    margin-bottom: 8px;
    font-size: 21px;
  }
`;

const EditBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid var(--black-075);
  margin-bottom: 24px;
  padding: 24px;
  gap: 12px;
`;

const ItemContainer = styled.div``;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid var(--black-200);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: 1px solid var(--black-200);
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 8px;
`;

const SaveButton = styled.button`
  cursor: pointer;
  height: 30px;
  border: 1px solid var(--blue-400);
  border-radius: 4px;
  background-color: var(--blue-500);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: var(--blue-700);
    border-color: var(--blue-500);
  }
`;

const CancelButton = styled.button`
  cursor: pointer;
  height: 30px;
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
