import styled from 'styled-components';
import HelpSvg from './HelpSvg';

const HelpItem = ({ title, help }) => {
  return (
    <HelpContainer>
      <div className="title">{title}</div>
      <HelpContents>
        <HelpSvg />
        <div>{help}</div>
      </HelpContents>
    </HelpContainer>
  );
};
export default HelpItem;

const HelpContainer = styled.section`
  width: 100%;
  margin-top: 30px;
  border: 1px solid var(--black-200);
  border-radius: 3px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  .title {
    padding: 10px;
    font-size: 15px;
    font-weight: 500;
    border-bottom: 1px solid var(--black-200);
    background-color: var(--black-050);
  }
`;
const HelpContents = styled.div`
  display: flex;
  padding: 10px;
  font-size: 12px;
  background-color: var(--white);
`;
