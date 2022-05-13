import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import useIsScrollTopZero from '@Hooks/useIsScrollTopZero';

interface StyledHeaderProps {
  isTop: boolean;
}

const StyledHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isTop',
})<StyledHeaderProps>(({ isTop, theme }) => ({
  height: '54px',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isTop ? 'transparent' : '#fff',
  boxShadow: isTop ? 'none' : '0 2px 12px 0 rgb(36 50 66 / 8%)',
  transition: `background-color ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut}`,
}));

function Header(): React.ReactElement {
  // States
  const isTop = useIsScrollTopZero();

  // Main
  return <StyledHeader isTop={isTop}>header</StyledHeader>;
}

export default memo(Header);
