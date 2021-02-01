import React from 'react';
import Radio from '@material-ui/core/Radio';
import IconLink from '@app/components/IconLink';
import { useThemeContext } from '@app/context/useThemeContext';
import GithubLogo from '@app/images/github.svg';
import LinkedInLogo from '@app/images/linkedin.svg';
import MediumLogo from '@app/images/medium.svg';
import TwitterLogo from '@app/images/twitter.svg';
import ThemeMap, { ThemeChoiceKeys } from '@app/styles/themes';

import { StyledSocialBar, StyledLabel, StyledTopBar, StyledLogo } from './styles';

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
        <StyledLogo><strong>cyh.io</strong></StyledLogo>
        <IconLink href="https://github.com/cherihung" target="_blank" rel="noopener noreferrer" title="Github">
          <GithubLogo width="24" />
        </IconLink>
        <IconLink href="https://twitter.com/cyhung" target="_blank" rel="noopener noreferrer" title="Twitter">
          <TwitterLogo width="24" />
        </IconLink>
        <IconLink href="https://linkedin.com/in/cyhung" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedInLogo width="24" />
        </IconLink>
        <IconLink href="https://medium.com/@cyhung" target="_blank" rel="noopener noreferrer" title="Medium">
          <MediumLogo width="24" />
        </IconLink>
      </StyledSocialBar>
      <div className={'radioGroup'}>{themeRadioChoices}</div>
    </StyledTopBar>
  )
}

TopBar.displayName = "TopBar";

export default React.memo(TopBar);