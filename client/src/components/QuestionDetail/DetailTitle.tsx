import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

const DetailTitle: React.FC = () => {
  const navigate = useNavigate();
  const onClickButton = () => navigate('/ask');
  return (
    <>
      <DetailPost>
        <Title>
          I am having a problem with lists in Python in a simple program. I
          can't seem to fix this and it seems like it should be a quick fix
        </Title>
        <Button onClick={onClickButton}>Ask Question</Button>
      </DetailPost>
      <DetailInfo>
        <p>
          Asked <span>today</span>
        </p>
        <p>
          Modified <span>today</span>
        </p>
        <p>
          Viewed <span>27 times</span>
        </p>
      </DetailInfo>
    </>
  );
};

const DetailPost = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 25px;
  color: var(--black-700);
  line-height: 1.35;
  font-weight: 500;
  margin-bottom: 0;
  padding-right: 16px;
`;

const DetailInfo = styled.section`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  p {
    margin-right: 16px;
    margin-bottom: 8;
    color: var(--fc-light);
    span {
      color: var(--color-black);
    }
  }
  border-bottom: 1px solid hsl(210, 8%, 85%);
`;
export default DetailTitle;
