import styled from 'styled-components';

const TagBar = ({ setwriteTag, title, help }) => {
  const TagHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setwriteTag(e.currentTarget.value);
  };
  return (
    <>
      <TagContainer>
        <div className="title">{title[0]}</div>
        <div className="help">{help}</div>
        <input className="tag-search" onChange={TagHandler}></input>
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

const RecommendTags = styled.div``;

export default TagBar;
