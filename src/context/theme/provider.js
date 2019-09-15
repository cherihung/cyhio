import React, { useReducer } from 'react';
import { getThemeObject, getUserTheme } from 'service/theme.service';

const STATES = {
  INIT_CHANGE: 'initChange',
  THEME: 'theme',
}

const defaultStates = {
  [STATES.INIT_CHANGE]: false,
  [STATES.THEME]: null,
}

const DispatchContext = React.createContext();
const StateContext = React.createContext();

function reducer(state, action) {
  switch(action.type) {
    case STATES.INIT_CHANGE: {
      return { 
        ...state,
        initChange: action.payload 
      }
    }
    case STATES.THEME: {
      const newTheme = getThemeObject(action.themeKey)
      return { 
        ...state,
        theme: newTheme 
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const ThemeContextProvider = ({children}) => {

  const defaultTheme = getUserTheme();
  const initState = {
    ...defaultStates,
    theme: defaultTheme,
  }
  
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { ThemeContextProvider, DispatchContext, StateContext, STATES };
