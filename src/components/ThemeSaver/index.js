import clsx from 'clsx';
import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as CheckIcon } from 'images/checkmark.svg';
import React from 'react';
import { saveUserThemeKey } from 'service/theme.service';

import { makeThemeStyles } from './styles';

function ThemeSaver(prop) {

  const { on, setter, theme } = prop;
  const styles = makeThemeStyles(theme.name)();

  const handleCancel = () => setter(false);

  const handleSave = () => {
    saveUserThemeKey(theme.name);
    setter(false);
  }

  return (
    on ?
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