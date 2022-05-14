import React, { memo } from 'react';
import cn from 'classnames';
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
    '&.AbsoluteCenter': {
      display: 'flex',
    },
  },
}));
const Container = styled('div')(() => ({
  margin: 'auto',
}));

function BodyBlock(props: BodyBlockProps): React.ReactElement {
  // States
  const { children, absoluteCenter, bgColor } = props;

  // Main
  return (
    <Base
      bgColor={bgColor}
      className={cn('BlockBase', absoluteCenter && 'AbsoluteCenter')}
    >
      <Container className="BlockContainer">{children}</Container>
    </Base>
  );
}

export default memo(BodyBlock);
