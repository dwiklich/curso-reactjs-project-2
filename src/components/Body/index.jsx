import P from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../../context/App';

export const Body = ({ body }) => {
  const textContent = useContext(GlobalContext);
  // console.log(textContent);
  const {
    state: { counter },
  } = textContent;

  return (
    <p>
      {body} {counter}
    </p>
  );
};

Body.propTypes = {
  body: P.string.isRequired,
};
