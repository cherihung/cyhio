import clsx from 'clsx';
import React from 'react';
import { useBaseStyles, useStyles } from 'styles/baseWrapper.style';

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