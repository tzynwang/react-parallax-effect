import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import { red, purple, pink } from '@mui/material/colors';
import BodyBlock from '@Components/Common/BodyBlock';

const BodyContainer = styled('div')(() => ({
  paddingTop: '54px',
  backgroundColor: purple[50],
}));

function Body(): React.ReactElement {
  // Main
  return (
    <BodyContainer>
      <BodyBlock bgColor={purple[50]}>block 1</BodyBlock>
      <BodyBlock bgColor={red[50]}>block 2</BodyBlock>
      <BodyBlock bgColor={pink[200]}>block 3</BodyBlock>
      <BodyBlock>block 4</BodyBlock>
    </BodyContainer>
  );
}

export default memo(Body);
