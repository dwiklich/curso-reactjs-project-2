// import P from 'prop-types';
import React, { useMemo } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import './App.css';
import { Posts } from './components/Posts';
import { AppContext } from './context/App';
import { globalState } from './context/App/data';
import { loadPosts } from './utils/loadPosts';

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const [contextState, setContextState] = useState(globalState);

  // useRef - seta o valor o elemento do document.DOM, para manipula-los.
  const input = useRef(null);

  console.log('Pai renderizou!');

  // Component did mount
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((r) => r.json())
  //     .then((r) => setPosts(r));
  // }, []);

  useEffect(() => {
    loadPosts().then((r) => {
      setPosts(r);
    });
  }, []);

  const handleRef = useCallback((value) => {
    setValue(value);
  }, []);

  useEffect(() => {
    // Manipulando o elemento da DOM
    input.current.focus();
    console.log(input.current);
  }, [value]);

  return (
    <div className="App">
      <p>
        {/* ref={} seta o elemento da DOM, */}
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>

      <AppContext value={{ contextState, setContextState }}>
        {/* useMemo - memoriza componentes, sem re-renderizar caso o pai atualize, porem o compomente do useMemo renderiza se as dependencias mudarem */}
        {useMemo(() => {
          return <Posts posts={posts} handleRef={handleRef} />;
        }, [posts, handleRef])}
      </AppContext>
    </div>
  );
}

export default App;
