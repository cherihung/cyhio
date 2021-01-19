import IconLink from 'components/IconLink';
import { useThemeContext } from 'context/useThemeContext';
import githubLogo from 'images/github.svg';
import linkedInLogo from 'images/linkedin.svg';
import mediumLogo from 'images/medium.svg';
import twitterLogo from 'images/twitter.svg';
import React from 'react';
import ThemeMap, { ThemeChoiceKeys } from 'styles/themes';
import Radio from '@material-ui/core/Radio';

import { StyledSocialBar, StyledLabel, StyledTopBar } from './styles';

function TopBar() {

  const { theme, setTheme } = useThemeContext();
  const handleChange = (event) => { 
    const value = event.target.value;
    setTheme(value);
  };
  const themeRadioChoices = ThemeChoiceKeys.map((themeKey) =>
    <React.Fragment key={themeKey}>
      {theme.name === ThemeMap[themeKey].name && <StyledLabel>{ThemeMap[themeKey].displayName}</StyledLabel>}
      <Radio
        checked={theme.name === ThemeMap[themeKey].name}
        onChange={handleChange}
        value={ThemeMap[themeKey].name}
        disableRipple={true}
        name="app-theme-selector"
      />
    </React.Fragment>
  )

  return (
    <StyledTopBar theme={theme.theme}>
      <StyledSocialBar>
        <div><strong>cyh.io</strong></div>
        <IconLink href="https://github.com/cherihung" target="_blank" rel="noopener noreferrer" title="Github">
          <img src={githubLogo} height="20px" alt="Github" />
        </IconLink>
        <IconLink href="https://twitter.com/cyhung" target="_blank" rel="noopener noreferrer" title="Twitter">
          <img src={twitterLogo} height="20px" alt="Twitter" />
        </IconLink>
        <IconLink href="https://medium.com/@cyhung" target="_blank" rel="noopener noreferrer" title="Medium">
          <img src={mediumLogo} height="20px" alt="Medium" />
        </IconLink>
        <IconLink href="https://linkedin.com/in/cyhung" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src={linkedInLogo} height="20px" alt="LinkedIn" />
        </IconLink>
      </StyledSocialBar>
      <div className={'radioGroup'}>{themeRadioChoices}</div>
    </StyledTopBar>
  )
}

TopBar.displayName = "TopBar";

export default React.memo(TopBar);