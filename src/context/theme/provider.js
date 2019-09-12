import React, { useState } from 'react';
import { getUserTheme } from 'service/theme.service';

import STATES from './states';

const ThemeContext = React.createContext();

const ThemeContextProvider = ({children}) => {

  const defaultTheme = getUserTheme();
  
  const [state, setState] = useState({
    [STATES.THEME]: defaultTheme,
    [STATES.INIT_THEME_CHANGE]: false,
    [STATES.SAVE_THEME]: false,
  });

  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
