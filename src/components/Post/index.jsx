import P from 'prop-types';
import { Body } from '../Body';
import { Title } from '../Title';

export const Post = ({ post, onClick }) => {
  console.log('Neto renderizou');
  post;
  onClick;

  return (
    <div key={post.id} className="post">
      <Title onClick={onClick} title={post.title} />
      {/* {post.title} */}

      <Body body={post.body} />
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
