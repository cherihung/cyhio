import CssBaseline from '@material-ui/core/CssBaseline';
import Content from 'components/Content/';
import ThemeSaver from 'components/ThemeSaver/';
import { ThemeContextProvider } from 'context/theme/provider';
import React from 'react';

import { useStyles } from './style';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    onlyLogs: true,
    include: [/^Resume/]
  });
}

function App() {

  const appStyles = useStyles();

  return (
    <div className={appStyles.root}>
      <CssBaseline />
      <ThemeContextProvider>
        <ThemeSaver /> 
        <Content appStyles={appStyles} />
      </ThemeContextProvider>
    </div>
  );
}

App.displayName = "App";

export default App;
