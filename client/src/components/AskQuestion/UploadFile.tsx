import React from 'react';
import styled from 'styled-components';
import API from '../../services/api/index';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const UploadFile = ({ edit }) => {
  const id = useParams();
  const [fileurl, setFileurl] = useState(``);
  const [file, setFile] = useState();
  const [success, setSuccess] = useState(false);
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
          url: `/api/questions/${id.id}/files`,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('file upload');
        setSuccess(true);
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
    if (edit) {
      getDataurl();
    }
    console.log(id);
  }, []);

  return (
    <FileContainer>
      <div className="upload-title">Upload</div>
      <form onSubmit={onSubmitForm}>
        <img id="preview" src={fileurl} width={300} height={300} />
        <input
          className="upload-name"
          placeholder={file ? '업로드 완료!' : '업로드 전..'}
        ></input>
        <div className="button-file">
          <label htmlFor="file" onClick={() => setSuccess(false)}>
            파일 찾기
          </label>
          <input type="file" id="file" onChange={readURL} />
          <button type="submit">파일 업로드</button>
        </div>
      </form>
      {success ? (
        <div className="success-message">파일 전송에 성공했습니다 ✅</div>
      ) : null}
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
    flex-direction: column;
    #preview {
      margin-bottom: 10px;
    }
    .upload-name {
      display: flex;
      height: 30px;
      padding: 0 10px;
      vertical-align: middle;
      border: 1px solid #dddddd;
      border-radius: 3px;
      width: 78%;
      color: #999999;
    }
    label {
      display: flex;
      height: 30px;
      justify-content: center;
      color: #fff;
      width: 80px;
      vertical-align: middle;
      background-color: var(--blue-300);
      border-radius: 3px;
      cursor: pointer;
      margin-bottom: 10px;
      margin-top: 10px;
      padding-top: 10px;
      font-size: 12px;
    }
    input[type='file'] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
  .button-file {
    display: flex;
    flex-direction: row;
  }
  .upload-title {
    font-weight: 600;
    margin-bottom: 10px;
  }
  button {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 12px;
    background-color: var(--white);
    color: var(--blue-500);
    border-radius: 3px;
    border: 1px solid var(--blue-500);
    margin-left: 10px;
    margin-top: 10px;
    height: 40px;
  }
  .success-message {
    font-size: 12px;
    color: var(--blue-800);
    margin-left: 10px;
  }
`;
