import P from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../../context/App';
import { Button } from '../Button';

import { Post } from '../Post';

export const Posts = ({ handleRef, posts }) => {
  // console.log('Filho renderizou');
  const textContent = useContext(GlobalContext);
  console.log('global');
  console.log(textContent);

  const {
    state: { titulo, counter },
  } = textContent;
  console.log(titulo, counter);
  return (
    <div className="Posts">
      <Button />

      <p>titulo context: {titulo}</p>
      <p>counter context: {counter}</p>
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post key={post.id} post={post} onClick={handleRef} />;
        })}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
};

Posts.propTypes = {
  posts: P.array,
  handleRef: P.func.isRequired,
};
