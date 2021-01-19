import { useThemeContext } from 'context/useThemeContext';
import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as CheckIcon } from 'images/checkmark.svg';
import React from 'react';
import { saveUserThemeKey } from 'service/theme.service';

import { ThemeSaverBox } from './styles';

function ThemeSaver() {

  const { theme, initChange, setThemeDone } = useThemeContext();

  const handleCancel = () => setThemeDone()

  const handleSave = () => {
    saveUserThemeKey(theme.name);
    setThemeDone();
  }

  return (
    initChange &&
    <ThemeSaverBox theme={theme.theme} themeName={theme.name}>
      <span>Save theme change?</span>
      <span>
        <CheckIcon onClick={ handleSave } alt="Yes" className="iconButton iconYes" />
        <CancelIcon onClick={ handleCancel } alt="No" className="iconButton iconNo" />
      </span>
    </ThemeSaverBox>
  )
}

ThemeSaver.displayName = "ThemeSaver";

export default ThemeSaver;