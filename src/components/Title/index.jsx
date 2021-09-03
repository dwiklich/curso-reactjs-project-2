import P from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/App';

export const Title = ({ onClick, title }) => {
  // console.log('BisNeto renderizou');

  const [text, setText] = useState('');

  const textContent = useContext(GlobalContext);
  // console.log(textContent);
  const {
    state: { msgAdmin, counter, titulo },
    setState,
  } = textContent;

  useEffect(() => {});

  return (
    <h1
      onClick={() => {
        // alert(msgAdmin + ': ' + title);
        text === msgAdmin ? setText(title) : setText(msgAdmin);

        onClick(title);
      }}
    >
      {text ? text : title}
      {text ? msgAdmin : title}
    </h1>
  );
};

Title.propTypes = {
  onClick: P.func.isRequired,
  title: P.string.isRequired,
};
