import { ThemeProvider } from '@material-ui/styles';
import About from 'components/About/';
import BaseWrapper from 'components/BaseWrapper/';
import BottomBadge from 'components/BottomBadge/';
import Resume from 'components/Resume/';
import ThemeSaver from 'components/ThemeSaver/';
import TopBar from 'components/TopBar/';
import { useThemeContext } from 'context/useThemeContext';
import React from 'react';

function Content({ appStyles }) {

  const { theme } = useThemeContext();

  return (
    <>
      <ThemeSaver />      
      <TopBar className={appStyles.topBar} />
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
    </>
  )
}

Content.displayName = "Content";

export default Content;