import CssBaseline from '@material-ui/core/CssBaseline';
import Content from 'components/Content/';
import { ThemeContextProvider } from 'context/theme/provider';
import React from 'react';

import { useStyles } from './style';

function App() {

  const appStyles = useStyles();

  return (
    <div className={appStyles.root}>
      <CssBaseline />
      <ThemeContextProvider>
        <Content appStyles={appStyles} />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
