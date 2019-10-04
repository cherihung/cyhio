import { ThemeProvider } from '@material-ui/styles';
import About from 'components/About/';
import BaseWrapper from 'components/BaseWrapper/';
import BottomBadge from 'components/BottomBadge/';
import Resume from 'components/Resume/';
import TopBar from 'components/TopBar/';
import { useThemeStateContext } from 'context/useThemeContext';
import React from 'react';

function Content({ appStyles }) {

  const { theme } = useThemeStateContext();

  const SiteThemeProvider = React.memo((props) => {
    return(<ThemeProvider theme={props.theme} >
      {props.children}
    </ThemeProvider>)
  })

  return (
    <>     
      <TopBar className={appStyles.topBar} />
      <SiteThemeProvider theme={theme.theme} >
        <BaseWrapper className={appStyles.baseWrapper}>
          <About />
          <Resume />
        </BaseWrapper>
        <BottomBadge>
          <a href="https://github.com/cherihung/cyhio" target="_blank" rel="noopener noreferrer" title="This site's source code">
            SOURCE CODE
          </a>
        </BottomBadge>
      </SiteThemeProvider>
    </>
  )
}

Content.displayName = "Content";

export default Content;