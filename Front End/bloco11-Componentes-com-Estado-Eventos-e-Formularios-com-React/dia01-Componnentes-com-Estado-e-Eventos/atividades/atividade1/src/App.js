import './App.css';

function handleClick() {
  console.log('Teste1');
}

function handleClick2() {
  console.log('Teste2');
}

function handleClick3() {
  console.log('Teste3');
}

function App() {
  return ( 
  <>
  <button onClick={handleClick}> Meu botão</button>
  <button onClick={handleClick2}> Meu botão2</button>
  <button onClick={handleClick3}> Meu botão3</button> 
  </>
  );
}

export default App;
