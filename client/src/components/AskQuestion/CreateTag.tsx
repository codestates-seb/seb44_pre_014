import styled from 'styled-components';

const TagBar = () => {
  return (
    <>
      <TagContainer>
        <input className="tag-search"></input>
      </TagContainer>
    </>
  );
};

const TagContainer = styled.div`
  display: grid;
  grid-row-gap: 3px;
  padding: 20px;
  background-color: var(--white);
`;

const RecommendTags = styled.div``;

export default TagBar;
