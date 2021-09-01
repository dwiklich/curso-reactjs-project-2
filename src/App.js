import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

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
