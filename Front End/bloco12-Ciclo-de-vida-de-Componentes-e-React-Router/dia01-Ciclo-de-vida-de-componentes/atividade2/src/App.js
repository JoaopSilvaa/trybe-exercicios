import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super();
  
      this.saveJoke = this.saveJoke.bind(this);
      this.renderJokeElement = this.renderJokeElement.bind(this);
  
      this.state = {
        jokeObj: undefined,
        loading: true,
        storedJokes: [],
      }
    }
  
    async fetchJoke() {
      this.setState(
        { loading: true }, //Primeiro parâmentro da setState = Atualização de estado assincrona
        async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject,
        })
      })

    }
  
    componentDidMount() {
      this.fetchJoke();
    }
  
    saveJoke() {
      //Salvando a piada no array de piadas existentes
      this.setState(({storedJokes, jokeObj }) => ({
        storedJokes: [...storedJokes, jokeObj],
      }))

      this.fetchJoke();
    }
  
    renderJokeElement() {
      return (
        <div>
          <p>{this.state.jokeObj.joke}</p>
          <button type="button" onClick={this.saveJoke}>
            Salvar piada!
          </button>
        </div>
      );
    }
  
    render() {
      const { storedJokes, loading } = this.state;
      const loadingElement = <span>Loading...</span>;
  
      return (
        <div>
          <span>
            {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
          </span>
  
        {loading ? loadingElement : this.renderJokeElement()}
  
        </div>
      );
    }
}

export default App;
