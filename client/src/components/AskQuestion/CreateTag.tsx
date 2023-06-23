import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TagBar = ({ writeTag, setwriteTag, title, help }) => {
  const navigate = useNavigate();
  const [newTag, setNewTag] = useState('');
  const TagHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setNewTag(e.currentTarget.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      setwriteTag([...writeTag, newTag]);
      setNewTag('');
    }
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
        <input
          className="tag-search"
          placeholder="입력하세요"
          value={newTag}
          onChange={TagHandler}
          onKeyPress={handleOnKeyPress}
        ></input>
        <TagsList>
          {writeTag[0] && <TagsName>{writeTag[0]}</TagsName>}
          {writeTag[1] && <TagsName>{writeTag[1]}</TagsName>}
          {writeTag[2] && <TagsName>{writeTag[2]}</TagsName>}
          {writeTag[3] && <TagsName>{writeTag[3]}</TagsName>}
          {writeTag[4] && <TagsName>{writeTag[4]}</TagsName>}
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
  border: 1px solid var(--black-075);
  border-radius: 3px;
`;

const TagsList = styled.div`
  display: flex;
  flex-direction: row;
`;

const TagsName = styled.div`
  display: flex;
  background-color: var(--blue-300);
  width: 12%;
  height: 20px;
  padding-top: 1px;
  border-radius: 3px;
  font-size: 13px;
  color: var(--white);
  text-align: center;
  margin: 3px;
  justify-content: center;
`;

export default TagBar;
