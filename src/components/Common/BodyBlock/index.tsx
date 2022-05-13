import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import type { BodyBlockProps } from './types';

interface BaseProps {
  bgColor?: string;
}

const Base = styled('div', {
  shouldForwardProp: (prop) => prop !== 'bgColor',
})<BaseProps>(({ bgColor, theme }) => ({
  width: '100%',
  minHeight: '600px',
  padding: '24px',
  backgroundColor: bgColor ? bgColor : 'transparent',
  [theme.breakpoints.up('md')]: {
    minHeight: '800px',
  },
}));
const Container = styled('div')(() => ({
  margin: 'auto',
}));

function BodyBlock(props: BodyBlockProps): React.ReactElement {
  // States
  const { children, bgColor } = props;

  // Main
  return (
    <Base bgColor={bgColor}>
      <Container>{children}</Container>
    </Base>
  );
}

export default memo(BodyBlock);
