import P from 'prop-types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ({ post, onClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1
        onClick={() => {
          onClick(post.title);
        }}
      >
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: P.func.isRequired,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // useRef - seta o valor o elemento do document.DOM, para manipula-los.
  const input = useRef(null);

  console.log('Pai renderizou!');

  // Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
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

      {/* useMemo - memoriza componentes, sem re-renderizar caso o pai atualize, porem o compomente do useMemo renderiza se as dependencias mudarem */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} onClick={handleRef} />;
          })
        );
      }, [posts, handleRef])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
