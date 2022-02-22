import React from "react"

class Password extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        let error = undefined;
        if (value.length < 8) error = 'A senha tem que conter no mínimo 8 caracteres';
        return(
            <label>
                Password:
                <input type='password' name='password' value={value} onChange={handleChange}></input>
                <span>{error ? error : ''}</span>
            </label>
        )
    }
}

export default Password