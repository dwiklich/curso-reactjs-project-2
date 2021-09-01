import './App.css';
import { useState } from 'react';

function App() {
  // const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <p>conter1 : {counter}</p>
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
