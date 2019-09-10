import { makeStyles } from '@material-ui/styles';

export const useBaseStyles = makeStyles({
  root: {
    fontSize: 14,
  },
  inner: {
    margin: '0 auto',
    width: '90vw',
    minWidth: '200px',
    padding: '0.5em 0',
    '@media (min-width:600px)': {
      padding: '1em',
      maxWidth: '800px',
      width: '80vw',
    },
  }
})

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    minHeight: '100vh',
  },
}));