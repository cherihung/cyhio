import { ThemeProvider } from 'styled-components';
import About from '@app/components/About/';
import BaseWrapper from '@app/components/BaseWrapper/';
import BottomBadge from '@app/components/BottomBadge/';
import Resume from '@app/components/Resume/';
import { useThemeContext } from '@app/context/useThemeContext';
import React from 'react';

function Content() {

  const { theme } = useThemeContext();
  const SiteThemeProvider = React.memo((props) => {
    return(<ThemeProvider theme={props.theme} >
      {props.children}
    </ThemeProvider>)
  })

  return (
    <>
      <SiteThemeProvider theme={theme.theme} >
        <BaseWrapper className={'baseWrapper'}>
          <About className={'about'} />
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