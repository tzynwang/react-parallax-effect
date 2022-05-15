import { styled } from '@mui/material/styles';

interface ImgProps {
  inView?: boolean;
}

export default styled('img', {
  shouldForwardProp: (prop) =>
    prop !== 'inView' && prop !== 'scrollTop' && prop !== 'viewportHeight',
})<ImgProps>(({ inView, theme }) => ({
  width: '100%',
  display: 'block',
  objectFit: 'cover',
  opacity: inView ? 1 : 0,
  // transform:
  //   inView && scrollTop && viewportHeight
  //     ? `translateY(${(scrollTop - viewportHeight) / 2}px)`
  //     : 'unset',
  transitionProperty: 'opacity',
  transitionDuration: `${theme.transitions.duration.enteringScreen}ms`,
  transitionTimingFunction: theme.transitions.easing.sharp,
}));
