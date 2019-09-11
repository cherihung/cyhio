import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import About from 'components/About';
import BaseWrapper from 'components/BaseWrapper';
import BottomBadge from 'components/BottomBadge';
import Resume from 'components/Resume';
import TopBar from 'components/TopBar';
import React, { useState } from 'react';
import ThemeMap from 'styles/themes';

import { useStyles } from './style';

function App() {

  const [theme, setClassName] = useState(ThemeMap.monokai);
  const appStyles = useStyles();

  return (
    <div className={appStyles.root}>
      <CssBaseline />
      <TopBar className={appStyles.topBar} themeSetter={setClassName} themeName={theme.name} />
      <ThemeProvider theme={theme.theme} >
        <BaseWrapper className={appStyles.baseWrapper}>
          <About className={appStyles.about} />
          <Resume />
        </BaseWrapper>
        <BottomBadge>
          <a href="https://github.com/cherihung/cyhio" target="_blank" rel="noopener noreferrer" title="This site's source code">
            SOURCE CODE
          </a>
        </BottomBadge>
      </ThemeProvider>
    </div>
  );
}

export default App;
