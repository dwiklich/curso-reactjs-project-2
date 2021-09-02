import P from 'prop-types';

import { Post } from '../Post';
// import { Title } from '../Title';

export const Posts = ({ handleRef, posts }) => {
  // console.log('Filho renderizou');

  return (
    <div className="Posts">
      {posts.length > 99 &&
        posts.map((post) => {
          return <Post key={post.id} post={post} onClick={handleRef} />;
        })}

      <p>seila</p>
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
};

Posts.propTypes = {
  posts: P.array,
  handleRef: P.func.isRequired,
};
