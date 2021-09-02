import P from 'prop-types';

import { Post } from '../Post';

export const Posts = ({ handleRef, posts }) => {
  // console.log('Filho renderizou');

  return (
    <div className="Posts">
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
