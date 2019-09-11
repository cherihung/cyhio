import clsx from 'clsx';
import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as CheckIcon } from 'images/checkmark.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { saveUserTheme } from 'service/userTheme.service';
import { ThemeChoiceKeys } from 'styles/themes';

import { makeThemeStyles } from './styles';

// import { saveUserTheme } from 'service/userTheme.service';
function ThemeSaver({on, themeName, setter}) {

  const styles = makeThemeStyles(themeName)();

  const handleCancel = () => setter(false)

  const handleSave = () => {
    saveUserTheme(themeName)
    setter(false)
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

ThemeSaver.prototype = {
  on: PropTypes.bool.isRequired,
  setter: PropTypes.func.isRequired,
  themeName: PropTypes.oneOf(ThemeChoiceKeys).isRequired
}

export default ThemeSaver;