import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/styles';
import IconLink from 'components/IconLink';
import githubLogo from 'images/github.svg';
import twitterLogo from 'images/twitter.svg';
import React from 'react';
import ThemeMap from 'styles/themes';

function _makeThemeStyles(key) {
  return makeStyles({
    root: {
      color: ThemeMap[key].theme.backgroundColor,
      '&$checked': {
        color: ThemeMap[key].theme.backgroundColor
      },
      padding: '5px'
    },
    checked: {}
  })
}

const useSocialStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '3.5em',
    lineHeight: 0,
  },
})

function TopBar(props) {

  const { className, themeSetter, themeName } = props;
  const [selectedValue, setSelectedValue] = React.useState(themeName);
  const ThemeChoiceKeys = Object.keys(ThemeMap);
  const socialStyles = useSocialStyles();
  
  let choiceStyles = {};

  ThemeChoiceKeys.map((theme) => 
    choiceStyles[theme] = _makeThemeStyles(theme)(),
  );

  const handleChange = (event) => { 
    const value = event.target.value;
    setSelectedValue(value)
    themeSetter(ThemeMap[value])
  };

  const themeRadioChoices = ThemeChoiceKeys.map((theme) =>
    <Radio
      key={theme}
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
  )

  return (
    <div className={className}>
      <div className={socialStyles.root}>
        <IconLink href="https://github.com/cherihung" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} height="20px" alt="Github" />
        </IconLink>
        <IconLink href="https://twitter.com/cyhung" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} height="20px" alt="Twitter" />
        </IconLink>
      </div>
      <div>{themeRadioChoices}</div>
    </div>
  )
}

export default TopBar;