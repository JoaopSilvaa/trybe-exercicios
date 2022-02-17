import logo from './logo.svg';
import './App.css';
const array = ['Acordar cedo', 'Estudar', 'Comer', 'Pular corda'];

const Task = (value) => {  
  return (
    value.map((element) => <li> { element } </li>)
  );
}

function App() {
  return (
    Task(array)
  );
}

export default App;
