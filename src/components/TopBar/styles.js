import { makeStyles } from '@material-ui/styles';
import ThemeMap from '@app/styles/themes';

export const makeThemeStyles = (key) => {
  return makeStyles({
    root: {
      color: ThemeMap[key].theme.backgroundColor,
      '&$checked': {
        color: ThemeMap[key].theme.backgroundColor
      },
      padding: '3px'
    },
    checked: {},
    label: {
      display: 'none',
      '@media (min-width:600px)': {
        display: 'inline',
        textTransform: 'uppercase',
        fontSize: '10px',
        color: '#272820',
      },
    }
  })
}

export const useSocialStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '10em',
    lineHeight: 0,
    marginLeft: '0.5em',
  },
})