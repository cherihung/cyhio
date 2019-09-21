import React from 'react';
import { getUserTheme } from 'service/theme.service';
import { useImmer } from 'use-immer';

const STATES = {
  THEME: 'theme',
}

const ThemeContext = React.createContext();

const ThemeContextProvider = ({children}) => {

  const defaultTheme = getUserTheme();
  
  const [state, setState] = useImmer({
    [STATES.THEME]: defaultTheme,
  });

  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext, STATES };
