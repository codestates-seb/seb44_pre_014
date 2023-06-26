import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TagBar = ({ writeTag, setwriteTag, title, help }) => {
  const [newTag, setNewTag] = useState('');
  const check = writeTag.includes(newTag); //초기 false
  const [long, setLong] = useState(false);

  const TagHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setNewTag(e.currentTarget.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (newTag?.length > 15) {
        setLong(true);
        return;
      } else {
        setLong(false);
      }
      if (writeTag?.length === 5) {
        console.log('5개 태그입니다!');
        return;
      }
      if (!check) {
        setwriteTag([...writeTag, newTag]);
        setNewTag('');
      }
    }
  };

  const deleteTag = (event) => {
    const deltag: string = event.currentTarget.innerHTML;
    setwriteTag(writeTag.filter((el) => el !== deltag));
  };

  useEffect(() => {
    console.log(writeTag);
  }, [writeTag]);

  return (
    <>
      <TagContainer>
        <div className="title">{title[0]}</div>
        <div className="help">{help}</div>
        {check && <div className="warning">* 이미 태그가 존재합니다</div>}
        {long ? <div className="warning">* 15자 이내로 입력하세요</div> : null}
        <input
          className="tag-search"
          placeholder="tag를 입력하세요"
          value={newTag}
          onChange={TagHandler}
          onKeyPress={handleOnKeyPress}
        ></input>
        <TagsList>
          {writeTag[0] && (
            <TagsName onClick={deleteTag}>{writeTag[0]}</TagsName>
          )}
          {writeTag[1] && (
            <TagsName onClick={deleteTag}>{writeTag[1]}</TagsName>
          )}
          {writeTag[2] && (
            <TagsName onClick={deleteTag}>{writeTag[2]}</TagsName>
          )}
          {writeTag[3] && (
            <TagsName onClick={deleteTag}>{writeTag[3]}</TagsName>
          )}
          {writeTag[4] && (
            <TagsName onClick={deleteTag}>{writeTag[4]}</TagsName>
          )}
        </TagsList>
      </TagContainer>
    </>
  );
};

const TagContainer = styled.div`
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
  .warning {
    color: red;
    font-size: 12px;
  }
  border: 1px solid var(--black-075);
  border-radius: 3px;
`;

const TagsList = styled.div`
  display: flex;
  flex-direction: row;
`;

const TagsName = styled.div`
  display: flex;
  background-color: var(--powder-100);
  width: auto;
  height: auto;
  padding: 3px 30px;
  border-radius: 3px;
  font-size: 13px;
  border: 1px solid var(--black-075);
  color: var(--black-700);
  text-align: center;
  margin: 3px;
  justify-content: center;
`;

export default TagBar;
