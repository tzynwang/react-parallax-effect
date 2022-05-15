import { styled } from '@mui/material/styles';

interface ImgProps {
  inViewport?: boolean;
  offsetY?: number;
}

export default styled('img', {
  shouldForwardProp: (prop) => prop !== 'inViewport' && prop !== 'offsetY',
})<ImgProps>(({ inViewport, offsetY, theme }) => ({
  width: '100%',
  display: 'block',
  objectFit: 'cover',
  opacity: inViewport ? 1 : 0,
  transform: `translateY(${inViewport && offsetY ? offsetY : 0}px)`,
  transitionProperty: 'opacity',
  transitionDuration: `${theme.transitions.duration.enteringScreen}ms`,
  transitionTimingFunction: theme.transitions.easing.sharp,
}));
