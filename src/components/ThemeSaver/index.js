import clsx from 'clsx';
import { useThemeContext } from 'context/useThemeContext';
import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as CheckIcon } from 'images/checkmark.svg';
import React from 'react';
import { saveUserThemeKey } from 'service/theme.service';

import { makeThemeStyles } from './styles';

function ThemeSaver() {

  const { theme, initChange, setThemeDone } = useThemeContext();

  const styles = makeThemeStyles(theme.name)();

  const handleCancel = () => setThemeDone()

  const handleSave = () => {
    saveUserThemeKey(theme.name);
    setThemeDone();
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