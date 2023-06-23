import React from 'react';
import styled from 'styled-components';
import { TQuestion } from 'utils/type';

type Tprops = {
  quData: TQuestion;
};

const DetailMainText: React.FC<Tprops> = ({ quData }) => {
  return (
    <DetailText>
      <p>{quData.content}</p>
    </DetailText>
  );
};

const DetailText = styled.div`
  display: grid;
  padding-right: 16px;
  grid-column: 2;
  margin: 16px;
  p {
    clear: both;
    margin-top: 0;
  }
`;
export default DetailMainText;
