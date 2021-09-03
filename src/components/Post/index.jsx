import P from 'prop-types';
import { useMemo } from 'react';
import { Body } from '../Body';
import { Title } from '../Title';

export const Post = ({ post, onClick }) => {
  console.log('Neto renderizou');
  post;
  onClick;

  return (
    <div key={post.id} className="post">
      {/* <Title onClick={onClick} title={post.title} /> */}
      {/* {post.title} */}

      {useMemo(() => {
        return <Title onClick={onClick} title={post.title} />;
      }, [post.title, onClick])}

      {useMemo(() => {
        return <Body body={post.body} />;
      }, [post.body])}

      {/* <p>{post.body}</p> */}
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
