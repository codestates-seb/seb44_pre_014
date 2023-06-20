import React from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { FiBookmark } from 'react-icons/fi';
import { BiHistory } from 'react-icons/bi';
import styled from 'styled-components';
import { useStoreCount } from 'store/count/store.count';

const VoteContainer: React.FC = () => {
  const { count, plusCount, minusCount } = useStoreCount((state) => state);
  return (
    <VoteCompo>
      <GoTriangleUp className="vote" onClick={plusCount} />
      <p>{count}</p>
      <GoTriangleDown className="vote" onClick={minusCount} />
      <FiBookmark className="icons" />
      <BiHistory className="icons" />
    </VoteCompo>
  );
};

const VoteCompo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  width: 52px;
  /* height: 100vh; */

  .vote {
    border: 1.3px solid var(--black-100) !important;
    border-radius: 50%;
    padding: 10px;
    margin: 15px;
    cursor: pointer !important;
    align-self: center !important;
    color: var(--black-700) !important;

    &:hover {
      background-color: var(--orange-100);
    }
  }

  .icons {
    font-size: 18px;
    color: var(--black-300);
    margin-bottom: 5px;
  }
  p {
    margin: 0;
    color: var(--black-800);
    font-weight: 600 !important;
  }
`;

export default VoteContainer;
