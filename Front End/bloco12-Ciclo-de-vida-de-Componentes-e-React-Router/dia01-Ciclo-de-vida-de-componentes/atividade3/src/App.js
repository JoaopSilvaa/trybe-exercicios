import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      data: [],
      loading: true,
    }

    this.showUser = this.showUser.bind(this);
  }

  componentDidMount(){
    this.fetchRandomUser();
  }

  async fetchRandomUser() {
    this.setState(
      { loading: true },
      async () => {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const result = await response.json();
        this.setState({
          loading: false,
          data: result,
        })
      })
  }

  showUser() {
    const { data } = this.state;
    return(
      <div>
      <img src={data.results[0].picture.large} alt={data.results[0].name}/> 
      <p>{ data.results[0].name.first } { data.results[0].name.last }</p>
      <p>{ data.results[0].email }</p>
      <p>{ data.results[0].dob.age }</p> 
      </div>
    )
  }


  render(){
    const { loading } = this.state;
    const loadingElement = <div>loading...</div>;
    return (
      <>
      { loading ? loadingElement : this.showUser()};
      </>
    )
  }
}

export default App;
