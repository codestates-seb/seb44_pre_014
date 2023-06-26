import { InputItem, TextareaItem } from 'components/AskQuestion/CreateAsk';
import { useState, useEffect } from 'react';
import API from '../../../services/api/index';
import { helpTitle, helpSentances, HowToEdit } from './Banner';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UploadFile from 'components/AskQuestion/UploadFile';
import TagBar from 'components/AskQuestion/CreateTag';
import { useStoreFile } from 'store/count/store.file';

const EditQuestion = ({ id, myId }) => {
  const [member, setMember] = useState<number>();
  const navigate = useNavigate();
  const { newFile, setnewFile } = useStoreFile();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [writetag, setwriteTag] = useState([]);
  const [isbReady, setIsbReady] = useState(false);
  const [istReady, setIstReady] = useState(false);

  const postok = istReady && isbReady;
  const warningpost = () => {
    console.log('cannot post');
  };
  useEffect(() => {
    body?.length > 20 ? setIsbReady(true) : setIsbReady(false);
  }, [body]);

  useEffect(() => {
    title?.length > 0 ? setIstReady(true) : setIstReady(false);
  }, [title]);

  const patchurl = `/api/questions/${id}/edit`;
  const geturl = `/api/questions/${id}`;
  const newData = {
    title: title,
    content: body,
    memberId: member,
    tagNames: writetag,
  };
  const goToMain = () => {
    navigate('/');
  };
  const newPost = async () => {
    try {
      const res = await API.PATCH({ url: patchurl, data: newData });
      console.log(res);
      goToMain();
    } catch (err) {
      console.log(err);
    }
  };

  const getPost = async () => {
    try {
      const res = await API.GET(geturl);
      console.log(res);
      setBody(res.data.content);
      setTitle(res.data.title);
      setMember(res.data.memberId);
      if (res.data.tagNames) {
        setwriteTag(res.data.tagNames);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    if (member && member !== myId) {
      console.log('자신이 쓴 글만 수정할 수 있습니다.');
      goToMain();
    }
  }, [member]);

  return (
    <MainWrapper>
      <HeadContainer>
        <div className="ask-header-title">Edit a public question</div>
        <HeaderHelp>
          <div className="head">{helpTitle[3]}</div>
          <div className="contents">
            {HowToEdit.map((el) => (
              <ul key={el}>
                <li>{el}</li>
              </ul>
            ))}
          </div>
        </HeaderHelp>
      </HeadContainer>
      <ItemContainer>
        <SingleWrapper>
          <InputItem
            value={title}
            setTitle={setTitle}
            title={helpTitle[0]}
            help={helpSentances[0]}
          ></InputItem>
        </SingleWrapper>
        <SingleWrapper>
          <TextareaItem
            value={body}
            setBody={setBody}
            title={helpTitle[1]}
            help={helpSentances[1]}
          ></TextareaItem>
          {!isbReady ? (
            <div className="check-warning">* 20자 이상 입력하세요</div>
          ) : null}
        </SingleWrapper>
        <SingleWrapper>
          <TagBar
            writeTag={writetag}
            setwriteTag={setwriteTag}
            title={helpTitle[2]}
            help={helpSentances[2]}
          />
        </SingleWrapper>
        <SingleWrapper>
          <UploadFile edit={'patch'} />
        </SingleWrapper>
      </ItemContainer>
      <BtnWrapper>
        <BtnContainer
          className={!postok && 'invalid'}
          onClick={postok ? newPost : warningpost}
        >
          Register
        </BtnContainer>
        <CancelBtn onClick={goToMain}>Cancel</CancelBtn>
      </BtnWrapper>
    </MainWrapper>
  );
};

export default EditQuestion;

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
  @media screen and (min-width: 1050px) {
    background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
    background-repeat: no-repeat;
  }
`;

const HeadContainer = styled.section`
  justify-content: center;
  align-items: center;
  div {
    font-size: 30px;
    font-weight: 700;
  }
  padding-top: 40px;
  padding-bottom: 30px;
  width: 70%;
`;

const HeaderHelp = styled.section`
  width: 100%;
  background-color: var(--yellow-100);
  padding: 10px 0px;
  border-radius: 3px;
  margin-top: 30px;
  color: var(--fc-medium);
  border: 1px solid var(--black-200);
  .head {
    display: flex;
    font-weight: 500;
    font-size: 21px;
    padding: 10px 30px;
  }
  .contents {
    display: flex;
    font-weight: 400;
    flex-direction: column;
    padding: 0;
    font-size: 12px;
    ul {
      height: 5px;
      margin-bottom: 5px;
    }
    margin-bottom: 20px;
  }
`;

const ItemContainer = styled.div`
  width: 70%;
  display: grid;
  grid-row-gap: 30px;
  padding-bottom: 30px;
  .tagCon {
    position: relative;
  }
`;
const SingleWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  .check-warning {
    color: red;
    font-size: 12px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 0;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
  height: 60px;
  .invalid {
    background-color: var(--blue-100);
    :hover {
      background-color: var(--blue-100);
    }
  }
`;

const BtnContainer = styled.button`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  height: 35px;
  width: 75px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  color: white;
  background-color: var(--blue-500);
  :hover {
    background-color: var(--blue-600);
  }
`;

const CancelBtn = styled.button`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 75px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  background-color: lightblue;
  :hover {
    background-color: skyblue;
  }
  border: none;
  border-radius: 3px;
`;
