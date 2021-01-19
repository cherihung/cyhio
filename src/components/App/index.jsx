import CssBaseline from '@material-ui/core/CssBaseline';
import Content from '@app/components/Content/';
import ThemeSaver from '@app/components/ThemeSaver/';
import TopBar from '@app/components/TopBar/';
import { ThemeContextProvider } from '@app/context/theme/provider';
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
