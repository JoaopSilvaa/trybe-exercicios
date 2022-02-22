import React from 'react';
import Name from './Name';
import Password from './Password';

class Form extends React.Component{
    constructor() {
        super()
        this.state = {
            name: '',
            fruta: '',
            password: '',
            vai: false,
            textao: '',
            numero: 0,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type ===  'checkbox' ? target.checked : target.value;
        this.setState({ 
            [name]: value
        })
    }

    render() {
        return(
            <form className='formzin'>
                <label>
                    Selecione a fruta Favorita:
                    <select name="fruta" value={this.state.fruta} onChange={this.handleChange}>
                        <option value="Laranja">Laranja</option>
                        <option value="Limão">Limão</option>
                        <option value="Tangerina">Tangerina</option>
                        <option value="Melancia">Melancia</option>
                    </select>
                </label>
                <fieldset>
                    <Name value={this.state.name} handleChange={this.handleChange}/>
                    <Password value={this.state.password} handleChange={this.handleChange}/>
                </fieldset>
                <label>
                    Digite um Texto:
                    <textarea name="textao" value={this.state.textao} onChange={this.handleChange}></textarea>
                </label>
                <label>
                    Selecione se vai ou não:
                    <input type="checkbox" name="vai" value={this.state.vai} onChange={this.handleChange}></input>
                </label>
                <label>
                    Bota tua idade aí moral:
                    <input type='number' name="numero" value={this.state.numero} onChange={this.handleChange}></input>
                </label>
                <label>
                    Bota uma imagem
                    <input type="file" />
                </label>
            </form>
        )
    }
}

export default Form