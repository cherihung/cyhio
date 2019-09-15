import clsx from 'clsx';
import { STATES } from 'context/theme/provider';
import { useThemeDispatchContext, useThemeStateContext } from 'context/useThemeContext';
import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as CheckIcon } from 'images/checkmark.svg';
import React from 'react';
import { saveUserThemeKey } from 'service/theme.service';

import { makeThemeStyles } from './styles';

function ThemeSaver() {

  const dispatch = useThemeDispatchContext();
  const { theme, initChange } = useThemeStateContext();

  const styles = makeThemeStyles(theme.name)();

  const handleCancel = () => {
    dispatch({
      type: STATES.INIT_CHANGE,
      payload: false,
    })
  }

  const handleSave = () => {
    saveUserThemeKey(theme.name);
    dispatch({
      type: STATES.INIT_CHANGE,
      payload: false,
    })
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