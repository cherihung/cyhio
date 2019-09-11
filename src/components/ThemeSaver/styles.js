import { makeStyles } from '@material-ui/styles';
import ThemeMap, { DarkThemes } from 'styles/themes';

function _isDarkTheme(key) {
  const DarkThemeKeys = Object.keys(DarkThemes);
  return DarkThemeKeys.includes(key) ? '1px 2px 4px rgba(113, 125, 135, .5)' : '1px 2px 4px rgba(36, 67, 91, .5)'
}

export const makeThemeStyles = (key) => { 
  return makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: '4em',
    right: '1em',
    backgroundColor: ThemeMap[key].theme.color,
    color: ThemeMap[key].theme.backgroundColor,
    padding: '0.5em 0.5em 0 0.5em',
    fontSize: '0.8rem',
    fontWeight: '500',
    flexDirection: 'column',
    boxShadow: _isDarkTheme(key)
  },
  iconButton: {
    margin: '0 2px',
    cursor: 'pointer',
    '& :hover': {
      fill: 'gray'
    }
  },
  iconYes: {
    fill: ThemeMap[key].theme.successColor
  },
  iconNo: {
    fill: ThemeMap[key].theme.alertColor
  }
}) };