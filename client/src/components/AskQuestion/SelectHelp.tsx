import styled from 'styled-components';

const HelpItem = ({ title, help }) => {
  return (
    <HelpContainer>
      <div className="title">{title}</div>
      <div>{help}</div>
    </HelpContainer>
  );
};
export default HelpItem;

const HelpContainer = styled.section`
  width: 300px;
  border: 1px solid var(--black-200);
  .title {
    background-color: var(--black-100);
    font-size: 15px;
    font-weight: 500;
  }
`;
