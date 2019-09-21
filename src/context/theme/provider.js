import React from 'react';
import { getUserTheme } from 'service/theme.service';
import { useImmer } from 'use-immer';

const STATES = {
  INIT_CHANGE: 'initChange',
  THEME: 'theme',
}

const ThemeContext = React.createContext();

const ThemeContextProvider = ({children}) => {

  const defaultTheme = getUserTheme();

  const [state, setState] = useImmer({
    [STATES.INIT_CHANGE]: false,
    [STATES.THEME]: defaultTheme,
  });

  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext, STATES };
