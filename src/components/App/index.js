import CssBaseline from '@material-ui/core/CssBaseline';
import Content from 'components/Content/';
import TopBar from 'components/TopBar/';
import { ThemeContextProvider } from 'context/theme/provider';
import React from 'react';

import { useStyles } from './style';

function App() {

  const appStyles = useStyles();

  return (
    <div className={appStyles.root}>
      <CssBaseline />
      <ThemeContextProvider>
        <TopBar className={appStyles.topBar} />
        <Content appStyles={appStyles} />
      </ThemeContextProvider>
    </div>
  );
}

App.displayName = "App";

export default App;
