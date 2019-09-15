import Radio from '@material-ui/core/Radio';
import IconLink from 'components/IconLink';
import { STATES } from 'context/theme/provider';
import { useThemeDispatchContext, useThemeStateContext } from 'context/useThemeContext';
import githubLogo from 'images/github.svg';
import linkedInLogo from 'images/linkedin.svg';
import twitterLogo from 'images/twitter.svg';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeMap, { ThemeChoiceKeys } from 'styles/themes';

import { makeThemeStyles, useSocialStyles } from './styles';

function TopBar(props) {


  const { className } = props;

  const socialStyles = useSocialStyles();
  let choiceStyles = {};
  
  const dispatch = useThemeDispatchContext();
  const state = useThemeStateContext();

  ThemeChoiceKeys.map((themeKey) => 
    choiceStyles[themeKey] = makeThemeStyles(themeKey)(),
  );

  const handleChange = (event) => { 
    const value = event.target.value;
    dispatch({
      type: STATES.THEME,
      themeKey: value
    })
    dispatch({
      type: STATES.INIT_CHANGE,
      payload: true,
    })
  };

  const themeRadioChoices = ThemeChoiceKeys.map((themeKey) =>
    <React.Fragment key={themeKey}>
      {state.theme.name === ThemeMap[themeKey].name ? <label className={choiceStyles[themeKey].label}>{ThemeMap[themeKey].displayName}</label> : null}
      <Radio
        checked={state.theme.name === ThemeMap[themeKey].name}
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
    </div>
  )
}

TopBar.propTypes = {
  className: PropTypes.string.isRequired
}

TopBar.displayName = "TopBar";

export default TopBar;