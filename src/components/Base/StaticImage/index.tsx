import { styled } from '@mui/material/styles';

export default styled('img')(() => ({
  width: '100%',
  position: 'static',
  display: 'block',
  outline: 'none',
  border: 'none',
  objectFit: 'cover',
  color: 'transparent'
}));
