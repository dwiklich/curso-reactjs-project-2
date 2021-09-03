import P from 'prop-types';

export const Body = ({ body }) => {
  return <p>{body}</p>;
};

Body.propTypes = {
  body: P.string.isRequired,
};
