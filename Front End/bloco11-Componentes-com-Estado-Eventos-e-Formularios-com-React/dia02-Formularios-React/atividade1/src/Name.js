import React from "react"

class Name extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        let error = undefined;
        if (value.length > 50) error = 'Nome grande hein?';
        if (value.length < 1) error = 'Bota um nome aí moral';
        return(
            <label>
                Nome:
                <input type='text' name='name' value={value} onChange={handleChange}></input>
            <span>{error ? error : ''}</span> <br />
            </label>
        )
    }
}

export default Name
