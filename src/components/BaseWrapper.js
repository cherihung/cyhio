import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';

const useBaseStyles = makeStyles({
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

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.backgroundColor,
    color: theme.color,
    minHeight: '100vh'
  },
}));

function BaseWrapper({children, className}) {
  const baseStyles = useBaseStyles();
  const styles = useStyles();
  const componentStyles = clsx(styles.root, baseStyles.root, className);
  return (
    <div className={componentStyles}>
      <div className={baseStyles.inner}>{children}</div>
    </div>
  )
}

export default BaseWrapper;