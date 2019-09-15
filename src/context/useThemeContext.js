import { useContext } from 'react';

import { DispatchContext, StateContext } from './theme/provider';

const useThemeStateContext = () => {
  const state = useContext(StateContext);

  if (state === undefined) {
    throw new Error('must be used within a Provider');
  }

  return state
};

const useThemeDispatchContext = () => {
  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error('must be used within a Provider');
  }

  return dispatch
}

export { useThemeDispatchContext, useThemeStateContext };