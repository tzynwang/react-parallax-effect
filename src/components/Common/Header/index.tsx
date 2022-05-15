import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import useWindowScrollTop from '@Hooks/useWindowScrollTop';

interface StyledHeaderProps {
  scrollY: number;
}

const StyledHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'scrollY',
})<StyledHeaderProps>(({ scrollY, theme }) => ({
  height: '54px',
  width: '100%',
  position: 'fixed',
  scrollY: 0,
  left: 0,
  zIndex: 99,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: scrollY ? 'rgba(255, 255, 255, 60%)' : 'transparent',
  boxShadow: scrollY ? '0 2px 12px 0 rgb(36, 50, 66, 8%)' : 'none',
  backdropFilter: scrollY ? 'blur(6px)' : 'none',
  transition: `background-color ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut}`,
}));

function Header(): React.ReactElement {
  // States
  const scrollY = useWindowScrollTop();

  // Main
  return <StyledHeader scrollY={scrollY}>header</StyledHeader>;
}

export default memo(Header);
