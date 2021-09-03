import { globalState } from '../../context/App/data';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      const { titulo } = state;
      console.log('mudado');
      console.log(titulo);
      console.log(action.payload);
      // state: { titulo: 'aaaa' }
      return { ...state, titulo: action.payload };
    }

    case 'INVERT_TITLE': {
      console.log('invertido');
      const { titulo } = state;
      return { ...state, titulo: titulo.split('').reverse().join('') };
    }

    case 'TITLE_LOWERCASE': {
      const { titulo } = state;
      return { ...state, titulo: titulo.toLowerCase() };
    }

    case 'TITLE_UPPERCASE': {
      const { titulo } = state;
      return { ...state, titulo: titulo.toUpperCase() };
    }

    case 'INCREMENT': {
      const { counter } = state;
      console.log('incrementado');
      console.log(counter);

      return { ...state, counter: counter + 1 };
    }

    case 'DECREMENT': {
      console.log('decrementado');
      const { counter } = state;
      return { ...state, counter: counter - 1 };
    }
    case 'RESTORE': {
      return { ...state, ...globalState };
    }

    default: {
      console.log('nenhuma action chamada'.toUpperCase());
      break;
    }
  }

  return { ...state };
};
