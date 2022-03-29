import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element,index) => (
            <p key={ index }>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

export default connect(mapStateToProps, null)(FirstComponent);
// Dependendo do caso de uso o segundo o parâmetro será null
// Abaixo a forma completa caso utilize os dois maps to props
// export default connect(mapStateToProps, mapDispatchToProps)(Component)
// No segundo parênteses coloca-se o componente que deverá ser conectado

