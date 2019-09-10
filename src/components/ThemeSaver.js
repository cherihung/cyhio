import clsx from 'clsx';
import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as CheckIcon } from 'images/checkmark.svg';
import React, { useState } from 'react';
import { useStyles } from 'styles/themeSaver.style';

function ThemeSaver() {

  const [ visible, setVisible ] = useState(false)
  const styles = useStyles();

  const handleCancel = () => setVisible(false)

  const handleSave = () => {
    setVisible(false)
  }

  return (
    visible ?
    <div className={ styles.root }>
      <span>Save theme change?</span>
      <span>
        <CheckIcon onClick={ handleSave } alt="Yes" className={ clsx(styles.iconButton, styles.iconYes) } />
        <CancelIcon onClick={ handleCancel } alt="No" className={ clsx(styles.iconButton, styles.iconNo) } />
      </span>
    </div> : null
  )
}

export default ThemeSaver;