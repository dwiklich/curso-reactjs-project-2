import { useContext } from 'react';
import { GlobalContext } from '../../context/App';

export const Button = () => {
  const textContent = useContext(GlobalContext);
  // const [state, dispatch] = useReducer(reducer, globalState);

  const {
    state: { counter, titulo },
    changeTitle,
    invertTitle,
    restore,
    titleLowerCase,
    decrementCounter,
    incrementCounter,
    titleUpperCase,
    // dispatch,
  } = textContent;

  return (
    <div className="Botao-Global-State">
      <button
        onClick={() => {
          // dispatch({ type: 'muda', payload: 'este é o payload' });
          changeTitle('este é o payload');
        }}
      >
        muda
      </button>
      <button
        onClick={() => {
          // dispatch({ type: 'inverte', payload: titulo });
          invertTitle();
        }}
      >
        inverte
      </button>

      <button
        onClick={() => {
          titleLowerCase();
        }}
      >
        diminui titulo
      </button>
      <button
        onClick={() => {
          titleUpperCase();
        }}
      >
        aumenta titulo
      </button>
      <button
        onClick={() => {
          incrementCounter();
        }}
      >
        incrementar
      </button>
      <button
        onClick={() => {
          decrementCounter();
        }}
      >
        decrementar
      </button>
      <button
        onClick={() => {
          // dispatch({ type: 'restore' });
          restore();
        }}
      >
        restaura
      </button>
    </div>
  );
};
