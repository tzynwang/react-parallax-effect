import { styled } from '@mui/material/styles';

interface ImgProps {
  src: string;
  startScrollEffect?: boolean;
  currentSec?: string;
}

export default styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'src' && prop !== 'startScrollEffect' && prop !== 'currentSec',
})<ImgProps>(({ src, startScrollEffect, currentSec, theme }) => ({
  height: '100%',
  width: '100%',
  position: 'static',
  display: 'block',
  outline: 'none',
  border: 'none',
  objectFit: 'cover',
  color: 'transparent',
  backgroundImage: `url(${src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transitionProperty: 'background',
  transitionDuration: `${theme.transitions.duration.shorter}ms`,
  transitionTimingFunction: theme.transitions.easing.sharp,
  [theme.breakpoints.up('md')]: {
    height: '400px',
    width: 'calc(100% - 48px)',
    marginLeft: '24px',
    position: (() => {
      if (currentSec === 'ref03') {
        return 'absolute';
      } else if (startScrollEffect) {
        return 'sticky';
      } else {
        return 'absolute';
      }
    })(),
    top: (() => {
      if (currentSec === 'ref03') {
        return 'auto';
      } else if (startScrollEffect) {
        return 'calc(50% - 200px)';
      } else {
        return 'calc(50vh)';
      }
    })(),
    bottom: currentSec === 'ref03' ? 0 : 'unset',
    transform: (() => {
      if (currentSec === 'ref03') {
        return 'translateY(-50%)';
      } else if (startScrollEffect) {
        return 'translateY(0)';
      } else {
        return 'translateY(-50%)';
      }
    })(),
  },
}));
