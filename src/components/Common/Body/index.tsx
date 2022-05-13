import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const StyledBody = styled('div')(() => ({
  height: '200vh',
  paddingTop: '54px',
  backgroundColor: red[100],
}));

function Body(): React.ReactElement {
  return <StyledBody>body</StyledBody>;
}

export default memo(Body);
