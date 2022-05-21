import { styled } from '@mui/material/styles';

interface ImgProps {
  className?: string;
  currentSec?: string;
  scrollNegative?: boolean;
  inVP?: boolean;
}

export default styled('img', {
  shouldForwardProp: (prop) =>
    prop !== 'className' &&
    prop !== 'currentSec' &&
    prop !== 'scrollNegative' &&
    prop !== 'inVP',
})<ImgProps>(({ className, currentSec, scrollNegative, inVP, theme }) => ({
  height: '400px',
  width: 'calc(100% - 24px)',
  display: 'block',
  objectFit: 'cover',
  paddingLeft: '24px',
  opacity: 1,
  [theme.breakpoints.up('md')]: {
    '&.ref01': {
      position: inVP ? 'sticky' : 'absolute',
      top: inVP ? 'calc(50% - 200px)' : 'calc(50vh)',
      transform: inVP ? 'translateY(0)' : 'translateY(-50%)',
    },
    '&.ref02, &.ref03': {
      opacity: className === currentSec ? 1 : 0,
      position: className === currentSec ? 'sticky' : 'absolute',
      top: className === currentSec ? 'calc(50% - 200px)' : 'calc(50vh)',
      zIndex: 9,
      transform:
        className === currentSec ? 'translateY(0)' : 'translateY(-50%)',
      transitionProperty: 'opacity',
      transitionDuration: `${theme.transitions.duration.enteringScreen}ms`,
      transitionTimingFunction: theme.transitions.easing.sharp,
      transitionDelay: '150ms',
    },
  },
}));
