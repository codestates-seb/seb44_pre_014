import React from 'react';
import styled from 'styled-components';
import API from '../../services/api/index';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreFile } from 'store/count/store.file';
const UploadFile = ({ edit }) => {
  const { newFile, setnewFile } = useStoreFile();
  const id = useParams();
  const [fileurl, setFileurl] = useState(``);
  const [file, setFile] = useState();
  const [success, setSuccess] = useState(false);
  const readURL = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
      console.log(event.target.files[0]);
      const res = URL.createObjectURL(event.target.files[0]);
      setFileurl(res);
    }
  };
  const handleImgError = (e) => {
    e.target.src = 'https://i.ibb.co/vjJJRHK/2023-06-26-10-57-48.png';
    //프로필이미지가 없을때 기본 프로필!
  };
  const fileDelete = () => {
    setFile(null);
    setFileurl('');
  };

  const onSubmitForm = async (event) => {
    try {
      event.preventDefault(); //리디렉션 방지..

      //POST 요청
      if (file) {
        const formData = new FormData();
        formData.append('files', file);

        const res = await API.POST({
          url: `/api/questions/${id.id}/files`,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (res.status !== 200) throw res;

        console.log('file upload');
        setSuccess(true);
      } else {
        console.log('file is null');
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
    if (edit === 'patch') {
      getDataurl();
    }
    console.log(id);
  }, []);

  return (
    <FileContainer>
      <div className="upload-title">Upload</div>
      <form onSubmit={onSubmitForm}>
        {edit === 'patch' && (
          <img
            id="preview"
            src={fileurl}
            width={300}
            height={300}
            onError={handleImgError}
          />
        )}
        {edit === 'new' && <div>파일을 등록하세요</div>}
        <input
          className="upload-name"
          placeholder={
            file
              ? '파일이 업로드 준비 상태입니다.'
              : '새 파일이 준비되지 않았습니다.'
          }
        ></input>
        <div className="button-file">
          <label htmlFor="file" onClick={() => setSuccess(false)}>
            파일 찾기
          </label>
          <input type="file" id="file" onChange={readURL} />
          <button className="file-del" onClick={fileDelete}>
            파일 삭제
          </button>
          <button type="submit">파일 업로드</button>
        </div>
      </form>
      {success ? (
        <div className="success-message">
          서버로의 파일 전송에 성공했습니다 ✅
        </div>
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
    img {
      border: 1px solid var(--black-075);
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
  .file-del {
    padding-left: 15px;
    padding-right: 15px;
  }
  .success-message {
    font-size: 12px;
    color: var(--blue-800);
    margin-left: 10px;
  }
`;
