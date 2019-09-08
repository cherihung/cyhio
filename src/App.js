import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import About from 'components/About';
import BaseWrapper from 'components/BaseWrapper';
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
    backgroundColor: '#919191',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 0.5em'
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
        <BaseWrapper>
          <About className={appStyles.about} />
          <Resume />
        </BaseWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
