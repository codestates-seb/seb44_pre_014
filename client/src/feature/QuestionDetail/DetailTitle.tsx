import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { TQuestion } from 'utils/type';

type Tprops = {
  quData: TQuestion;
};

const DetailTitle: React.FC<Tprops> = ({ quData }) => {
  const navigate = useNavigate();
  const onClickButton = () => navigate('/questions/write');
  function formatRelativeDate(dateString: string): string {
    const date: Date = new Date(dateString);
    const today: Date = new Date();

    const diffTime: number = Math.abs(today.getTime() - date.getTime());
    const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'today';
    } else if (diffDays === 1) {
      return 'yesterday';
    } else {
      return `${diffDays} days ago`;
    }
  }
  return (
    <>
      <DetailPost>
        <Title>{quData.title}</Title>
        <Button onClick={onClickButton}>Ask Question</Button>
      </DetailPost>
      <DetailInfo>
        <p>
          Asked <span>{formatRelativeDate(quData.createdAt)}</span>
        </p>
        <p>
          Modified <span>{formatRelativeDate(quData.modifiedAt)}</span>
        </p>
        <p>
          Viewed <span>{quData.view}</span>
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
