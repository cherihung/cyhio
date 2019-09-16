import Radio from '@material-ui/core/Radio';
import IconLink from 'components/IconLink';
import ThemeSaver from 'components/ThemeSaver/';
import { useThemeContext } from 'context/useThemeContext';
import githubLogo from 'images/github.svg';
import linkedInLogo from 'images/linkedin.svg';
import twitterLogo from 'images/twitter.svg';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ThemeMap, { ThemeChoiceKeys } from 'styles/themes';

import { makeThemeStyles, useSocialStyles } from './styles';

function TopBar(props) {


  const { className } = props;

  const socialStyles = useSocialStyles();
  let choiceStyles = {};
  
  const { theme, setTheme } = useThemeContext();
  const [ saverOn, setSaverOn ] = useState(false);

  ThemeChoiceKeys.map((themeKey) => 
    choiceStyles[themeKey] = makeThemeStyles(themeKey)(),
  );

  const handleChange = (event) => { 
    const value = event.target.value;
    setTheme(value);
    setSaverOn(true)
  };

  const themeRadioChoices = ThemeChoiceKeys.map((themeKey) =>
    <React.Fragment key={themeKey}>
      {theme.name === ThemeMap[themeKey].name ? <label className={choiceStyles[themeKey].label}>{ThemeMap[themeKey].displayName}</label> : null}
      <Radio
        checked={theme.name === ThemeMap[themeKey].name}
        onChange={handleChange}
        value={ThemeMap[themeKey].name}
        disableRipple={true}
        name="app-theme-selector"
        classes={{
          root: choiceStyles[themeKey].root,
          checked: choiceStyles[themeKey].checked
        }}
      />
    </React.Fragment>
  )

  return (
    <div className={className}>
      <div className={socialStyles.root}>
        <div><strong>cyh.io</strong></div>
        <IconLink href="https://twitter.com/cyhung" target="_blank" rel="noopener noreferrer" title="Twitter">
          <img src={twitterLogo} height="20px" alt="Twitter" />
        </IconLink>
        <IconLink href="https://linkedin.com/in/cyhung" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src={linkedInLogo} height="20px" alt="LinkedIn" />
        </IconLink>
        <IconLink href="https://github.com/cherihung" target="_blank" rel="noopener noreferrer" title="Github">
          <img src={githubLogo} height="20px" alt="Github" />
        </IconLink>
      </div>
      <div>{themeRadioChoices}</div>
      <ThemeSaver on={saverOn} setter={setSaverOn} theme={theme} />
    </div>
  )
}

TopBar.propTypes = {
  className: PropTypes.string.isRequired
}

TopBar.displayName = "TopBar";

export default TopBar;