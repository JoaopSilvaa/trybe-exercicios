import React, { useState } from 'react';
import useArray from './hooks/useArray';
import TodoList from './TodoList';

function App() {
  const [newInput, setInput] = useState('');;
  const { addTodos, todos } = useArray();

  const handleInput = ({target}) => {
    setInput(target.value);
  }

  const handleClick = () => {
    addTodos(newInput);
    setInput('');
  }

  return (
    <div className="App">
      <input
        type='text'
        value={newInput}
        onChange={handleInput}
      />
      <button
        type='button'
        onClick={() => handleClick()}
      >
        Add To do
      </button>
      <TodoList tasks={todos} />
    </div>
  );
}

export default App;
