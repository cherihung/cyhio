import { useContext } from 'react';
import { getThemeObject } from '@app/service/theme.service';

import { STATES, ThemeContext } from './theme/provider';

const useThemeContext = () => {
  const [state, setState] = useContext(ThemeContext);

  function setTheme(key) {
    const newTheme = getThemeObject(key);
    setState(draft => {
      draft[STATES.THEME] = newTheme;
      draft[STATES.INIT_CHANGE] = true;
    })
  }

  function setThemeDone() {
    setState(draft => {
      draft[STATES.INIT_CHANGE] = false;
    })
  }
  

  return {
    ...state,
    setTheme,
    setThemeDone,
  }
};

export { useThemeContext };
