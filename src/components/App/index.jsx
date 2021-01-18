import CssBaseline from '@material-ui/core/CssBaseline';
import Content from '@app/components/Content/';
import ThemeSaver from '@app/components/ThemeSaver/';
import TopBar from '@app/components/TopBar/';
import { ThemeContextProvider } from '@app/context/theme/provider';
import React from 'react';

import { useStyles } from './style';

function App() {

  const appStyles = useStyles();

  return (
    <div className={appStyles.root}>
      <CssBaseline />
      <ThemeContextProvider>
        <ThemeSaver /> 
        <TopBar className={appStyles.topBar} />
        <Content appStyles={appStyles} />
      </ThemeContextProvider>
    </div>
  );
}

App.displayName = "App";

export default App;
