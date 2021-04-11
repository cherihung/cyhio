import { useThemeContext } from '@app/context/useThemeContext';
import CancelIcon from '@app/images/cancel.svg';
import CheckIcon from '@app/images/checkmark.svg';
import React from 'react';
import { saveUserThemeKey } from '@app/service/theme';

import { StyledThemeSaverBox } from './styles';

function ThemeSaver() {

  const { theme, initChange, setThemeDone } = useThemeContext();

  const handleCancel = () => setThemeDone()

  const handleSave = () => {
    saveUserThemeKey(theme.name);
    setThemeDone();
  }

  return (
    initChange &&
    <StyledThemeSaverBox theme={theme.theme} themeName={theme.name}>
      <span>Save theme change?</span>
      <span>
        <CheckIcon onClick={ handleSave } alt="Yes" className="iconButton iconYes" />
        <CancelIcon onClick={ handleCancel } alt="No" className="iconButton iconNo" />
      </span>
    </StyledThemeSaverBox>
  )
}

ThemeSaver.displayName = "ThemeSaver";

export default ThemeSaver;