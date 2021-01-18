import clsx from 'clsx';
import { useThemeContext } from '@app/context/useThemeContext';
import CancelIcon from '@app/images/cancel.svg';
import CheckIcon from '@app/images/checkmark.svg';
import React from 'react';
import { saveUserThemeKey } from '@app/service/theme.service';

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

ThemeSaver.displayName = "ThemeSaver";

export default ThemeSaver;