import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  topBar: {
    backgroundColor: '#bfbdac',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '5px 0'
  },
  baseWrapper: {
    paddingTop: '1em'
  },
  about: {
    '@media (min-width:600px)': {
      paddingBottom: '2em',
    },
  }
})