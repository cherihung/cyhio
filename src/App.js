import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import About from 'components/About';
import BaseWrapper from 'components/BaseWrapper';
import BottomBadge from 'components/BottomBadge';
import Resume from 'components/Resume';
import TopBar from 'components/TopBar';
import React, { useState } from 'react';
import ThemeMap from 'styles/themes';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  topBar: {
    backgroundColor: '#bfbdac',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1.5em 0 0.5em',
    position: 'fixed',
    width: '100vw'
  },
  baseWrapper: {
    paddingTop: '1em'
  },
  about: {
    paddingBottom: '2em'
  }
})

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
