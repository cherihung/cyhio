import clsx from 'clsx';
import { useThemeContext } from 'context/useThemeContext';
import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as CheckIcon } from 'images/checkmark.svg';
import React from 'react';
import { saveUserThemeKey } from 'service/theme.service';

import { makeThemeStyles } from './styles';

function ThemeSaver() {

  const { theme, initChange, finishChange } = useThemeContext();

  const styles = makeThemeStyles(theme.name)();

  const handleCancel = () => finishChange()

  const handleSave = () => {
    saveUserThemeKey(theme.name);
    finishChange();
  }

  return (
    initChange ?
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