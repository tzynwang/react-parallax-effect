import React, { memo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '@Theme/index';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <div>parallax effect</div>
    </ThemeProvider>
  );
}

export default memo(App);
