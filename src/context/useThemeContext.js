import { useContext } from 'react';
import { getThemeObject } from 'service/theme.service';

import { STATES, ThemeContext } from './theme/provider';

const useThemeContext = () => {
  const [state, setState] = useContext(ThemeContext);

  function setTheme(key) {
    const newTheme = getThemeObject(key);
    setState(state => ({
      ...state, 
      [STATES.THEME]: newTheme,
      [STATES.INIT_CHANGE]: true
    }))
  }

  function setThemeDone() {
    setState(state => ({
      ...state,
      [STATES.INIT_CHANGE]: false
    }))
  }


  return {
    ...state,
    setTheme,
    setThemeDone
  }
};

export { useThemeContext };