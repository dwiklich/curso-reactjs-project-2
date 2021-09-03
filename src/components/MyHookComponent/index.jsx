import P from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import './styles.css';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay]);
};

export const MyHookComponent = ({ value }) => {
  const [counterHook, setCounterHook] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [timeDate, setTimeDate] = useState(new Date().toLocaleTimeString().slice(6, 8));
  const inputCounter = useRef(null);
  const inputDelay = useRef(null);

  useEffect(() => {
    delay;
  }, [delay]);

  function valida(valor) {
    if (typeof valor !== 'number') {
      return 1000;
    }
    return valor;
  }

  // useMyHook(() => setTimeDate(new Date().toLocaleTimeString().slice(6, 8)));
  useMyHook(() => setCounterHook((c) => c + 1), delay);

  return (
    <div className="MyHook">
      <p>{value}</p>
      <div className="nyhook-status">
        <div className="myhook-status_value">
          <p>Counter: {counterHook}</p>
          <p>Delay: {delay}</p>
        </div>
        <div className="myhook-status_set-value">
          <label htmlFor="value-input">
            <input ref={inputCounter} type="text" name="delayValue" id="value-input" />
            <input
              type="button"
              className="counter"
              onClick={() => {
                const value = Number(inputCounter.current.value);
                // const value = input.current.value;
                if (!value) return;
                const valueValidation = valida(value);
                setCounterHook(valueValidation);
              }}
              id="input-delay"
              value="counter"
            />
          </label>

          <label htmlFor="value-input">
            <input ref={inputDelay} type="text" name="delayValue" id="value-input" />
            <input
              type="button"
              className="delay"
              onClick={() => {
                const value = Number(inputDelay.current.value);
                if (!value) return;
                const valueValidation = valida(value);
                setDelay(valueValidation);
              }}
              id="input-delay"
              value="delay"
            />
          </label>
        </div>
      </div>

      <p>seconds: {timeDate}</p>
    </div>
  );
};

MyHookComponent.propTypes = {
  value: P.string,
};
