import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import { red, purple, amber } from '@mui/material/colors';
import BodyBlock from '@Components/Common/BodyBlock';
import { Section01, Section02 } from '@Components/Common/BlockContent';

const BodyContainer = styled('div')(() => ({
  paddingTop: '54px',
  backgroundColor: purple[50],
}));

function Body(): React.ReactElement {
  // Main
  return (
    <BodyContainer>
      <BodyBlock bgColor={purple[50]}>
        <Section01 />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} absoluteCenter>
        <Section02 />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} absoluteCenter>
        <Section02 />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} absoluteCenter>
        <Section02 />
      </BodyBlock>
      <BodyBlock bgColor={red[50]}>
        <div>footer</div>
      </BodyBlock>
    </BodyContainer>
  );
}

export default memo(Body);
