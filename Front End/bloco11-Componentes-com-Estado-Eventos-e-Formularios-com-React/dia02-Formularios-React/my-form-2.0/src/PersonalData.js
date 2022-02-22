import React from "react";

class PersonalData extends React.Component {
    constructor(){
        super()
    
        this.state = {
          name: '',
          email: '',
          cpf: '',
          endereco: '',
          city: '',
          estado: '',
          logradouro: '',
        }
    
        this.handleUpperCase = this.handleUpperCase.bind(this);
        this.handleChange = this.handleChange.bind(this)
      }
    
      handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]: value
        })
      }
    
      handleUpperCase ({ target }) {
        const { value } = target;
        this.setState({ name: value.toUpperCase() })
      }
    
      render() {
        return (
          <form className='form'>
            <fieldset>
              <label>
                Nome:
                <input type="text" name="name" maxLength={40} onChange={this.handleChange} onChange={this.handleUpperCase} value={this.state.name}></input>
              </label>
              <label>
                Email:
                <input type="text" name="email" maxLength={50} onChange={this.handleChange} value={this.state.email}></input>
              </label>
              <label>
                CPF:
                <input type="text" name="cpf" maxLength={11} onChange={this.handleChange} value={this.state.cpf}></input>
              </label>
              <label>
                Coloque seu endereço:
                <input type="text" name="endereco" maxLength={200} onChange={this.handleChange} value={this.state.endereco}></input>
              </label>
              <label>
                Coloque sua cidade:
                <input type="text" name="city" maxLength={28} onChange={this.handleChange} onBlur={this.handleNumber} value={this.state.city}></input>
              </label>
              <label>
                Selecione um estado:
                <select name="estado"></select>
              </label>
              <label className='log'>
                Selecione um logradouro:
                <label>
                <input type="radio" name="logradouro" />
                Casa
                </label>
                <label>
                <input type="radio" name="logradouro" />
                Apartamento
                </label>
              </label>
            </fieldset>
          </form>
        );
    }
}

export default PersonalData