import { styled } from '@mui/material/styles';

interface ImgProps {
  inViewport?: boolean;
  offsetY?: number;
  toNegative?: boolean;
}

export default styled('img', {
  shouldForwardProp: (prop) =>
    prop !== 'inViewport' && prop !== 'offsetY' && prop !== 'toNegative',
})<ImgProps>(({ inViewport, offsetY, toNegative, theme }) => ({
  width: '100%',
  display: 'block',
  objectFit: 'cover',
  opacity: 1,
  transform: 'translateY(0px)',
  [theme.breakpoints.up('md')]: {
    opacity: inViewport || toNegative ? 1 : 0,
    transform: `translateY(${
      inViewport && offsetY && !toNegative ? offsetY : 0
    }px)`,
    transitionProperty: 'opacity',
    transitionDuration: `${theme.transitions.duration.enteringScreen}ms`,
    transitionTimingFunction: theme.transitions.easing.sharp,
  },
}));
