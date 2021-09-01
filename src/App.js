import React, { useCallback, useEffect, useState } from 'react';
import P from 'prop-types';

import './App.css';

const Button = React.memo(function Button({ onClick }) {
  console.log('Filho, renderizou');
  return <button onClick={() => onClick(10)}>[ + ]</button>;
});

Button.propTypes = {
  onClick: P.func.isRequired,
  numeroRandom: P.number,
};
// const numeroRandom = {
//   _payload: {
//     _result: {
//       number: Number(Math.random().toFixed(2) * (1000 - 100) + 100),
//     },
//   },
// };

function App() {
  // const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  console.log('Pai, renderizou');

  // console.log(numeroRandom._result.call(this.number, ob));
  // const incrementCounter = (num) => {
  //   setCounter2((prevState) => prevState + num);
  //   console.log('Function foi criada', numeroRandom);
  // };

  // useCallback - mantem a function incrementCounter, sem re-renderizar ela apos o render de outros componentes

  const incrementCounter = useCallback((num) => {
    setCounter2((prevState) => prevState + num);
  }, []);

  const eventFn = () => {
    console.log('h1 clicado');
  };

  // componentDidUpdate - executa toda vez que o component atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidMount - executa 1x

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <div className="container">
        <h1>conter1 : {counter}</h1>
        <p>conter2 : {counter2}</p>
        <div>
          useCallback Button
          <Button onClick={incrementCounter} />
        </div>
        <button
          onClick={() => {
            setCounter((prevReverse) => prevReverse + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter2((prevReverse) => prevReverse + 1);
          }}
        >
          + (2)
        </button>
      </div>
    </div>
  );
}

export default App;
