import React, { memo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Body from '@Components/Common/Body';
import AppTheme from '@Theme/index';

function App(): React.ReactElement {
  // Main
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Body />
    </ThemeProvider>
  );
}

export default memo(App);
