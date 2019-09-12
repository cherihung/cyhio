import { useContext } from 'react';
import { getThemeObject } from 'service/theme.service';

import { ThemeContext } from './theme/provider';
import STATES from './theme/states';

const useThemeContext = () => {
  const [state, setState] = useContext(ThemeContext);

  function changeTheme(key) {
    const newTheme = getThemeObject(key);
    setState(state => ({
      ...state, 
      [STATES.THEME]: newTheme,
      [STATES.INIT_THEME_CHANGE]: true
    }))
  }

  function finishChange() {
    setState(state => ({
      ...state,
      [STATES.INIT_THEME_CHANGE]: false
    }))
  }


  return {
    [STATES.INIT_THEME_CHANGE]: state[STATES.INIT_THEME_CHANGE],
    [STATES.SAVE_THEME]: state[STATES.SAVE_THEME],
    [STATES.THEME]: state[STATES.THEME],
    changeTheme,
    finishChange
  }
};

export { useThemeContext, STATES };