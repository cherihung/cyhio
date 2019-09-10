import Radio from '@material-ui/core/Radio';
import IconLink from 'components/IconLink';
import ThemeSaver from 'components/ThemeSaver';
import githubLogo from 'images/github.svg';
import linkedInLogo from 'images/linkedin.svg';
import twitterLogo from 'images/twitter.svg';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeMap, { ThemeChoiceKeys } from 'styles/themes';
import { makeThemeStyles, useSocialStyles } from 'styles/topBar.style';

function TopBar(props) {

  const { className, themeSetter, themeName } = props;
  const [ selectedValue, setSelectedValue ] = React.useState(themeName);
  const [ saverOn, setSaver ] = React.useState(false)
  const socialStyles = useSocialStyles();
  
  let choiceStyles = {};

  ThemeChoiceKeys.map((theme) => 
    choiceStyles[theme] = makeThemeStyles(theme)(),
  );

  const handleChange = (event) => { 
    const value = event.target.value;
    setSelectedValue(value)
    setSaver(true)
    themeSetter(ThemeMap[value])
  };

  const themeRadioChoices = ThemeChoiceKeys.map((theme) =>
    <React.Fragment key={theme}>
      {selectedValue === ThemeMap[theme].name ? <label className={choiceStyles[theme].label}>{ThemeMap[theme].displayName}</label> : null}
      <Radio
        checked={selectedValue === ThemeMap[theme].name}
        onChange={handleChange}
        value={ThemeMap[theme].name}
        disableRipple={true}
        name="app-theme-selector"
        classes={{
          root: choiceStyles[theme].root,
          checked: choiceStyles[theme].checked
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
      <ThemeSaver on={saverOn} themeName={themeName} setter={setSaver} />
    </div>
  )
}

TopBar.propTypes = {
  className: PropTypes.string.isRequired,
  themeSetter: PropTypes.func.isRequired,
  themeName: PropTypes.oneOf(ThemeChoiceKeys).isRequired
}

export default TopBar;