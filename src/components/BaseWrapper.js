import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';

const useBaseStyles = makeStyles({
  root: {
    fontSize: 16,
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.backgroundColor,
    color: theme.color,
    height: '100vh'
  },
}));

function BaseWrapper({children}) {
  const baseStyles = useBaseStyles();
  const styles = useStyles();
  const componentStyles = clsx(styles.root, baseStyles.root);
  return (
    <div className={componentStyles}>
      {children}
    </div>
  )
}

export default BaseWrapper;