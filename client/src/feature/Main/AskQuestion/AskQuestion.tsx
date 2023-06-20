import { InputItem, TextareaItem } from 'components/AskQuestion/CreateAsk';
import HelpItem from 'components/AskQuestion/SelectHelp';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AskQuestion = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [selectHelp, setSelectHelp] = useState(0);

  useEffect(() => {
    body.length > 20 ? setIsReady(true) : setIsReady(false);
  }, [body]);

  const helpTitle = [
    ['Title'],
    [
      'What are the details of your problem and what did you try to solve it ?',
      'questionContent',
    ],
    ['Tags'],
  ];

  const HeaderSentence = [
    'You’re ready to ask a programming-related question and this form will help guide you through the process. Looking to ask a non-programming question? See the topics here to find a relevant site.',
  ];
  const helpSentances = [
    'Be specific and imagine you’re asking a question to another person.',
    'Introduce the problem and expand on what you put in the title. Minimum 20 characters.',
    'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',
  ];
  const bannerTitle = [
    'Writing a good title',
    'Introduce the problem',
    'Adding tags',
  ];
  const bannerContents = [
    [
      'Your title should summarize the problem. You might find that you have a better idea of your title after writing out the rest of the question.',
    ],
    [
      'Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.',
    ],
    [
      'Tags help ensure that your question will get attention from the right people.Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.',
    ],
  ];
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
        <SingleWrapper onClick={() => setSelectHelp(0)}>
          <InputItem
            setTitle={setTitle}
            title={helpTitle[0]}
            help={helpSentances[0]}
          ></InputItem>
          {selectHelp === 0 ? (
            <HelpItem
              title={bannerTitle[0]}
              help={bannerContents[0]}
            ></HelpItem>
          ) : null}
        </SingleWrapper>
        <SingleWrapper onClick={() => setSelectHelp(1)}>
          <TextareaItem
            setBody={setBody}
            title={helpTitle[1]}
            help={helpSentances[1]}
          ></TextareaItem>
          {selectHelp === 1 ? (
            <HelpItem
              title={bannerTitle[1]}
              help={bannerContents[1]}
            ></HelpItem>
          ) : null}
        </SingleWrapper>
      </ItemContainer>
      <BtnWrapper>
        <BtnContainer className={!isReady && 'invalid'}>Register</BtnContainer>
        <CancelBtn>Cancel</CancelBtn>
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
  background-color: var(--blue-300);
  :hover {
    background-color: var(--blue-500);
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
