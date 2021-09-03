import { createContext, useReducer, useState } from 'react';
// import { reducer } from '../../config/reducer/reducer';
import P from 'prop-types';

import { globalState } from './data';
import { reducer } from '../../config/reducer/reducer';
import { actions } from '../../config/reducer/actions';

// import { reducerAll, reducerCounter } from '../../config/reducer/reducer-action/reducer-all';

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload: payload });
  };
  const invertTitle = (payload) => {
    dispatch({ type: actions.CHANGE_INVERT });
  };
  const titleLowerCase = () => {
    dispatch({ type: actions.TITLE_LOWERCASE });
  };

  const titleUpperCase = () => {
    dispatch({ type: actions.TITLE_UPPERCASE });
  };

  const incrementCounter = () => {
    dispatch({ type: actions.INCREMENT });
  };

  const decrementCounter = () => {
    dispatch({ type: actions.DECREMENT });
  };

  const restore = () => {
    dispatch({ type: actions.RESTORE });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        changeTitle,
        invertTitle,
        restore,
        titleLowerCase,
        titleUpperCase,
        incrementCounter,
        decrementCounter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// AppContext.defaultValue = {
//   value: globalState,
// };

AppContext.propTypes = {
  children: P.node,
};
