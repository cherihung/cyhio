import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';

import BaseWrapper from './components/BaseWrapper';
import { darkTheme, lightTheme } from './styles/themes';

function TopBar({children, themeSetter}) {

  const useStyles = makeStyles({
    root: {
      backgroundColor: '#dcdcdc',
      padding: '0.5em'
    }
  })

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <button onClick={() => themeSetter(lightTheme)}>Toggle Theme</button>
      {children}
    </div>
  )
}

function App() {

  const [theme, setClassName] = useState(darkTheme);

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar themeSetter={setClassName} />
      <ThemeProvider theme={theme} >
        <BaseWrapper>
          <div>something</div>
        </BaseWrapper>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
