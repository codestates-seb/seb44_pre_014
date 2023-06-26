import { Profile } from 'feature/Profile/Myinfo_top';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import API from '../../services/api/index';
import styled from 'styled-components';
import { API_MEMBER_EDIT, API_MEMBER_FILE } from 'services/api/type';

const Edit_main = ({ userData }) => {
  const { id } = useParams();
  const [display, setDisplay] = useState(userData.username);
  const [about, setAbout] = useState(userData.content);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(
    `https://teamdev.shop/members/${id}/files`
  );
  const [imageFile, setImageFile] = useState();

  useEffect(() => {
    setDisplay(userData.username);
    setAbout(userData.content);
  }, [userData]);

  const moveToProfile = () => {
    navigate(`/profile/${id}`);
    window.scrollTo({ top: 0 });
  };

  const onSubmitForm = async (event) => {
    try {
      event.preventDefault();

      if (imageFile) {
        const formData = new FormData();
        formData.append('files', imageFile);

        const res = await API.POST({
          url: API_MEMBER_FILE(id),
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (res.status !== 200) throw res;
      }

      const editData = {
        username: display,
        content: about,
      };
      const res = await API.PATCH({
        url: API_MEMBER_EDIT(id),
        data: editData,
      });
      if (res.status !== 200) throw res;

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

  const readURL = (event) => {
    setImageFile(event.target.files[0]);
    const res = URL.createObjectURL(event.target.files[0]);
    setImageUrl(res);
  };

  return (
    <StyledEditContainer>
      <form onSubmit={onSubmitForm} onChange={onChangeForm}>
        <div className="public-title">Public information</div>
        <EditBoxContainer>
          <ItemContainer>
            <Title>Profile Image</Title>
            <AvatarEdit>
              <label htmlFor="avatar">Change Picture</label>
              <img id="preview" src={imageUrl} />
              <input type="file" id="avatar" onChange={readURL} />
            </AvatarEdit>
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
          <SaveButton type="submit" onClick={moveToProfile}>
            Save Profile
          </SaveButton>
          <CancelButton onClick={moveToProfile}>Cancel</CancelButton>
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

const AvatarEdit = styled(Profile)`
  width: 164px;
  height: 164px;
  position: relative;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  label {
    position: absolute;
    color: black;
    bottom: 0;
    font-size: 12px;
    text-align: center;
    width: 164px;
    padding: 8px 0;
    color: var(--white);
    background: var(--black-600);
    cursor: pointer;

    &:hover {
      background: var(--black-700);
    }
  }

  input {
    display: none;
  }
`;

const AddButton = styled.div``;

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
