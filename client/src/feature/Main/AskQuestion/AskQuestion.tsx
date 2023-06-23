import { InputItem, TextareaItem } from 'components/AskQuestion/CreateAsk';
import HelpItem from 'components/AskQuestion/SelectHelp';
import { useState, useEffect } from 'react';
import API from '../../../services/api/index';
import {
  HeaderSentence,
  helpTitle,
  helpSentances,
  bannerTitle,
  bannerContents,
} from './Banner';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TagBar from 'components/AskQuestion/CreateTag';

const AskQuestion: React.FC = () => {
  //memebersId 받아와야하는데..? store나 localstoraged에서 불러와야해야
  const member = 1; //일단 임의로 넣기
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [writetag, setwriteTag] = useState([]);
  const [isbReady, setIsbReady] = useState(false);
  const [istReady, setIstReady] = useState(false);
  const [selectHelp, setSelectHelp] = useState('init');
  const postok = istReady && isbReady;
  const warningpost = () => {
    console.log('cannot post');
  };
  useEffect(() => {
    body.length > 20 ? setIsbReady(true) : setIsbReady(false);
  }, [body]);

  useEffect(() => {
    title.length > 0 ? setIstReady(true) : setIstReady(false);
  }, [title]);

  const url = '/api/questions/write';
  const newData = {
    title: title,
    content: body,
    memberId: member,
  };

  const goToMain = () => {
    navigate('/');
  };
  const newPost = async () => {
    try {
      const res = await API.POST({ url: url, data: newData });
      console.log(res);
      goToMain();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainWrapper>
      <HeadContainer>
        <div className="ask-header-title">Ask a public question</div>
        <HeaderHelp>
          <div className="head">Writing a good question</div>
          <div className="contents">{HeaderSentence[0]}</div>
        </HeaderHelp>
      </HeadContainer>
      <ItemContainer>
        <SingleWrapper onClick={() => setSelectHelp('0')}>
          <InputItem
            setTitle={setTitle}
            title={helpTitle[0]}
            help={helpSentances[0]}
            value={title}
          ></InputItem>
          {selectHelp === '0' ? (
            <HelpItem
              title={bannerTitle[0]}
              help={bannerContents[0]}
            ></HelpItem>
          ) : null}
        </SingleWrapper>
        <SingleWrapper onClick={() => setSelectHelp('1')}>
          <TextareaItem
            setBody={setBody}
            title={helpTitle[1]}
            help={helpSentances[1]}
            value={body}
          ></TextareaItem>
          {!isbReady && selectHelp === '1' ? (
            <div className="check-warning">* 20자 이상 입력하세요</div>
          ) : null}
          {selectHelp === '1' ? (
            <HelpItem
              title={bannerTitle[1]}
              help={bannerContents[1]}
            ></HelpItem>
          ) : null}
        </SingleWrapper>
        <SingleWrapper onClick={() => setSelectHelp('2')}>
          <TagBar
            writeTag={writetag}
            setwriteTag={setwriteTag}
            title={helpTitle[2]}
            help={helpSentances[2]}
          />
          {selectHelp === '2' ? (
            <HelpItem
              title={bannerTitle[2]}
              help={bannerContents[2]}
            ></HelpItem>
          ) : null}
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

export default AskQuestion;

const MainWrapper = styled.div`
  display: flex;
  background-color: var(--black-050);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
`;

const HeadContainer = styled.section`
  div {
    font-size: 30px;
    font-weight: 700;
  }
  margin-left: 30%;
  padding-top: 40px;
  padding-bottom: 30px;
  width: 100%;
  @media screen and (min-width: 1050px) {
    background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
    background-repeat: no-repeat;
  }
`;

const HeaderHelp = styled.section`
  width: 70%;
  background-color: var(--blue-050);
  padding: 50px 0px;
  border-radius: 3px;
  margin-top: 30px;
  color: var(--fc-medium);
  border: 1px solid var(--powder-200);
  .head {
    display: flex;
    font-weight: 500;
    font-size: 21px;
    padding: 10px 30px;
  }
  .contents {
    display: flex;
    font-weight: 400;
    font-size: 15px;
    padding: 10px 30px;
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
