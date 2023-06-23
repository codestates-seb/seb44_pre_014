import React from 'react';
import styled from 'styled-components';
import API from '../../services/api/index';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UploadFile = () => {
  const id = useParams();
  const [fileurl, setFileurl] = useState(``);
  const [file, setFile] = useState();
  const readURL = (event) => {
    setFile(event.target.files[0]);
    const res = URL.createObjectURL(event.target.files[0]);
    setFileurl(res);
  };

  const onSubmitForm = async (event) => {
    try {
      event.preventDefault();

      if (file) {
        const formData = new FormData();
        formData.append('files', file);

        await API.POST({
          url: `/api/questions/${id.id}/files?size=1`,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getDataurl = async () => {
    try {
      const res = await API.GET(`/api/questions/${id.id}/files?size=1`);
      setFileurl(`data:image/jpeg;base64,` + res.data[0]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDataurl();
    console.log(id);
  }, []);

  return (
    <FileContainer>
      <div className="upload-title">Upload</div>
      <form onSubmit={onSubmitForm}>
        <img id="preview" src={fileurl} width={300} height={300} />
        <input type="file" id="file" onChange={readURL} />
        <button type="submit">제출</button>
      </form>
    </FileContainer>
  );
};

export default UploadFile;

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--white);
  border: 1px solid var(--black-075);
  justify-content: center;
  border-radius: 3px;
  form {
    display: flex;
    flex-direction: column;
  }
  .upload-title {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
