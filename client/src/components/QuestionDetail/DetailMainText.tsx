import React from 'react';
import styled from 'styled-components';

const DetailMainText: React.FC = () => {
  return (
    <DetailText>
      <p>
        My code is pretty simple, it outputs a list. Currently only the first
        two items in it are the desirable output, all the other items are just
        whatever I put in the "nextwords" and "overmorrowwords" variables in the
        second 'for' statement.
      </p>
      <p>
        The code is ran on Replit, and the 'TrainingData' thing is just a text
        file. I know the variable names are strange.
      </p>
      <p>
        Heres ascreenshot of the output, as you can see only the first two items
        in the list are what I want and it should continue with words like that
        but it does not: The code output screenshot Heres the code:
      </p>
      <a href="https://i.stack.imgur.com/P5SMI.png">
        The code output screenshot
      </a>
      <br />
      <p>Heres the code:</p>
      <pre>
        <code>
          <span>import random</span>
          <br />
          word = 'I'
        </code>
      </pre>
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
  a {
    color: #0050b3;
  }
  pre {
    background-color: var(--highlight-bg);
    border-radius: 5px;
    color: var(--highlight-color);
    font-size: 14px;
    line-height: 50px;
    margin: 0;
    overflow: auto;
    padding: 12px;
  }
`;
export default DetailMainText;
