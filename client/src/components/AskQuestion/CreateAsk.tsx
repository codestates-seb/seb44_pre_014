import styled from 'styled-components';

const InputItem = ({ setTitle, title, help }) => {
  const textHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <InputContainer>
      <div className="title">{title[0]}</div>
      <div className="help">{help}</div>
      <input onChange={textHandler} className="modify-input-content"></input>
    </InputContainer>
  );
};

const TextareaItem = ({ setBody, title, help }) => {
  const textHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };

  return (
    <TextareaContainer>
      <div className="title">{title[0]}</div>
      <div className="help">{help}</div>
      <input onChange={textHandler} className="modify-textarea-content"></input>
    </TextareaContainer>
  );
};
const InputContainer = styled.section`
  display: grid;
  grid-row-gap: 3px;
  padding: 20px;
  background-color: var(--white);
  .title {
    font-weight: 600;
  }
  .help {
    width: 100%;
    font-size: 12px;
  }
  border: 1px solid var(--black-075);
  border-radius: 3px;
`;
const TextareaContainer = styled.section`
  display: grid;
  grid-row-gap: 3px;
  padding: 20px;
  background-color: var(--white);
  .title {
    font-weight: 600;
  }
  .help {
    width: 100%;
    font-size: 12px;
  }
  .modify-textarea-content {
    width: 98%;
    height: 200px;
  }
  border: 1px solid var(--black-075);
  border-radius: 3px;
`;
export { InputItem, TextareaItem };
