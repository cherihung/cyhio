import { useContext } from 'react';

import { DispatchContext, StateContext } from './theme/provider';

const useThemeStateContext = () => {
  const state = useContext(StateContext);

  return state
};

const useThemeDispatchContext = () => {
  const dispatch = useContext(DispatchContext)

  return dispatch
}

export { useThemeDispatchContext, useThemeStateContext };