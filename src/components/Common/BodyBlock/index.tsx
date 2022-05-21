import React, { memo, forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import type { BodyBlockProps } from './types';

interface BaseProps {
  bgColor?: string;
}

const Base = styled('div', {
  shouldForwardProp: (prop) => prop !== 'bgColor'
})<BaseProps>(({ bgColor, theme }) => ({
  width: '100%',
  minHeight: '600px',
  padding: '24px',
  backgroundColor: bgColor ? bgColor : 'transparent',
  [theme.breakpoints.up('md')]: {
    height: '100vh'
  }
}));
const Container = styled('div')(() => ({
  margin: 'auto'
}));

const BodyBlock = forwardRef<HTMLDivElement, BodyBlockProps>((props, ref) => {
  // States
  const { children, bgColor } = props;

  // Main
  return (
    <Base ref={ref} bgColor={bgColor} className="BlockBase">
      <Container className="BlockContainer">{children}</Container>
    </Base>
  );
});

export default memo(BodyBlock);
