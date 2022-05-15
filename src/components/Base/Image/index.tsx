import { styled } from '@mui/material/styles';

interface ImgProps {
  inViewport?: boolean;
}

export default styled('img', {
  shouldForwardProp: (prop) =>
    prop !== 'inViewport' && prop !== 'scrollTop' && prop !== 'viewportHeight',
})<ImgProps>(({ inViewport, theme }) => ({
  width: '100%',
  display: 'block',
  objectFit: 'cover',
  opacity: inViewport ? 1 : 0,
  // transform:
  //   inViewport && scrollTop && viewportHeight
  //     ? `translateY(${(scrollTop - viewportHeight) / 2}px)`
  //     : 'unset',
  transitionProperty: 'opacity',
  transitionDuration: `${theme.transitions.duration.enteringScreen}ms`,
  transitionTimingFunction: theme.transitions.easing.sharp,
}));
