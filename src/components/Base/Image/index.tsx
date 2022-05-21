import { styled } from '@mui/material/styles';

interface ImgProps {
  src: string;
  inVP?: boolean;
  currentSec?: string;
}

export default styled('img', {
  shouldForwardProp: (prop) =>
    prop !== 'src' && prop !== 'inVP' && prop !== 'currentSec',
})<ImgProps>(({ src, inVP, currentSec, theme }) => ({
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
    position: inVP ? 'sticky' : 'absolute',
    top: inVP ? 'calc(50% - 200px)' : 'calc(50vh)',
    transform: inVP ? 'translateY(0)' : 'translateY(-50%)',
  },
}));
