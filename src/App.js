import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import BaseWrapper from 'components/BaseWrapper';
import TopBar from 'components/TopBar';
import React, { useState } from 'react';
import ThemeMap from 'styles/themes';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  topBar: {
    backgroundColor: '#dcdcdc',
    display: 'flex',
    justifyContent: 'space-between'
  }
})

function App() {

  const [theme, setClassName] = useState(ThemeMap.black);
  const appStyles = useStyles();

  return (
    <div className={appStyles.root}>
      <CssBaseline />
      <TopBar className={appStyles.topBar} themeSetter={setClassName} themeName={theme.name} />
      <ThemeProvider theme={theme.theme} >
        <BaseWrapper>
          <div>something</div>
        </BaseWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
