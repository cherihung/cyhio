import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: '4em',
    right: '1em',
    backgroundColor: theme.color,
    color: theme.backgroundColor,
    padding: '0.5em 0.5em 0 0.5em',
    borderRadius: '0.2em',
    fontSize: '0.8rem',
    fontWeight: '500',
    flexDirection: 'column'
  },
  iconButton: {
    margin: '0 2px',
    cursor: 'pointer',
    '& :hover': {
      fill: 'gray'
    }
  },
  iconYes: {
    fill: theme.successColor
  },
  iconNo: {
    fill: theme.alertColor
  }
}));