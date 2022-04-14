import React from 'react';
import useTimer from './hooks/useTimer';

function App() {
  const { number, isMultiple, timer } = useTimer();
  return (
    <div>
      <p>{`Número aleatório gerado: ${number}`}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>{timer}</p>
    </div>
  );
}

export default App;
