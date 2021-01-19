import CssBaseline from '@material-ui/core/CssBaseline';
import Content from 'components/Content/';
import ThemeSaver from 'components/ThemeSaver/';
import TopBar from 'components/TopBar/';
import { ThemeContextProvider } from 'context/theme/provider';
import React from 'react';

import { StyledAppRoot } from './style';

function App() {

  return (
    <StyledAppRoot>
      <CssBaseline />
      <ThemeContextProvider>
        <ThemeSaver /> 
        <TopBar />
        <Content />
      </ThemeContextProvider>
    </StyledAppRoot>
  );
}

App.displayName = "App";

export default App;
