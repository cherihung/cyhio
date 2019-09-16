import React, { useState } from 'react';
import { getUserTheme } from 'service/theme.service';

const STATES = {
  THEME: 'theme',
}

const defaultStates = {
  [STATES.THEME]: null,
}

const ThemeContext = React.createContext();

const ThemeContextProvider = ({children}) => {

  const defaultTheme = getUserTheme();
  
  const [state, setState] = useState({
    ...defaultStates,
    theme: defaultTheme,
  });

  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext, STATES };
