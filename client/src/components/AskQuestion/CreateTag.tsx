import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TagBar = ({ writeTag, setwriteTag, title, help }) => {
  const [newTag, setNewTag] = useState('');
  const check = writeTag.includes(newTag); //초기 false
  const warning = false;

  const TagHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setNewTag(e.currentTarget.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter' && writeTag.length < 5) {
      checktagexist();
      if (!check) {
        setwriteTag([...writeTag, newTag]);
        setNewTag('');
      } else {
        console.log('이미 태그가 존재합니다');
      }
    }
  };

  const checktagexist = () => {
    console.log(check);
  };

  const deleteTag = (event) => {
    const deltag: string = event.currentTarget.innerHTML;
    console.log(deltag);
    setwriteTag(writeTag.filter((el) => el !== deltag));
  };

  useEffect(() => {
    console.log(writeTag);
    console.log('update');
  }, [writeTag]);

  return (
    <>
      <TagContainer>
        <div className="title">{title[0]}</div>
        <div className="help">{help}</div>
        {check && <div className="warning">* 이미 태그가 존재합니다</div>}
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
