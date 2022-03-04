import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    }
  }
  //Primeira forma de fazer
  fetchCaracters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCaracters();
  }
  /*Segunda forma de fazer
   componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }
    */
   
  render(){
    const { characters } = this.state;
    return(
      <div className='App'>
        <h1>
          Rick and Morty: Characters:
        </h1>
        <div className='body'>
          {characters.map(({ name, image }) => {
            return (
              <div className='container' key={name}>
                <h3>{ name }</h3>
                <img src={ image } alt={ name }/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default App;
