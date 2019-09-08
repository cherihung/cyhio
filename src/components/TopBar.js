import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/styles';
import IconLink from 'components/IconLink';
import githubLogo from 'images/github.svg';
import linkedInLogo from 'images/linkedin.svg';
import twitterLogo from 'images/twitter.svg';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeMap from 'styles/themes';

function _makeThemeStyles(key) {
  return makeStyles({
    root: {
      color: ThemeMap[key].theme.backgroundColor,
      '&$checked': {
        color: ThemeMap[key].theme.backgroundColor
      },
      padding: '2px'
    },
    checked: {},
    label: {
      textTransform: 'capitalize',
      fontSize: '10px',
      color: '#d3d3d3'
    }
  })
}

const useSocialStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '8em',
    lineHeight: 0,
  },
})

const ThemeChoiceKeys = Object.keys(ThemeMap);

function TopBar(props) {

  const { className, themeSetter, themeName } = props;
  const [selectedValue, setSelectedValue] = React.useState(themeName);
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
    <React.Fragment key={theme}>
      {selectedValue === ThemeMap[theme].name ? <label className={choiceStyles[theme].label}>{theme}</label> : null}
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
    </div>
  )
}

TopBar.propTypes = {
  className: PropTypes.string.isRequired,
  themeSetter: PropTypes.func.isRequired,
  themeName: PropTypes.oneOf(ThemeChoiceKeys).isRequired
}

export default TopBar;