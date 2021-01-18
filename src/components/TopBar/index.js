import PropTypes from 'prop-types';
import React from 'react';
import Radio from '@material-ui/core/Radio';
import IconLink from '@app/components/IconLink';
import { useThemeContext } from '@app/context/useThemeContext';
import githubLogo from '@app/images/github.svg';
import linkedInLogo from '@app/images/linkedin.svg';
import mediumLogo from '@app/images/medium.svg';
import twitterLogo from '@app/images/twitter.svg';
import ThemeMap, { ThemeChoiceKeys } from '@app/styles/themes';

import { makeThemeStyles, useSocialStyles } from './styles';

function TopBar(props) {


  const { className } = props;

  const socialStyles = useSocialStyles();
  let choiceStyles = {};
  
  const { theme, setTheme } = useThemeContext();

  ThemeChoiceKeys.map((themeKey) => 
    choiceStyles[themeKey] = makeThemeStyles(themeKey)(),
  );

  const handleChange = (event) => { 
    const value = event.target.value;
    setTheme(value);
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
      </div>
      <div>{themeRadioChoices}</div>
    </div>
  )
}

TopBar.propTypes = {
  className: PropTypes.string.isRequired
}

TopBar.displayName = "TopBar";

export default React.memo(TopBar);