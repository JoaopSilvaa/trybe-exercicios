import logo from './logo.svg';
import './App.css';

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;

const textJSX = 'Hello, JSX';
const elementJSX = textJSX;

function App() {
  return (
    <div className='App'>
      <h1>{elementJSX}</h1>   
    </div>
  );
}

export default App;
