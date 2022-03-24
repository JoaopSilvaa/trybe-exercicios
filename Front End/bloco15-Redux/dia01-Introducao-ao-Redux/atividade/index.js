//importando o REDUX
const Redux = require('redux');
//construindo uma action que irá alterar o estado
const fazerLogin = (email) => ({
    type: 'LOGIN',
    email
});
//criando um estado inicial para não ser undefined
const ESTADO_INICIAL = {
    login: false,
    email: '',
};
//criando um reducer que recebe o estado inicial e a action
//que vai alterar o store
const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                login: !state.login,
                email: action.email,
            };
        default:
            return state;
    }
    
};
//store que recebe o reducer que vai altera-lo
const store = Redux.createStore(reducer);

//despachando a alteração feita pelo reducer no store
store.dispatch(fazerLogin("alguem@email.com"));

//está capturando o estado do store
console.log(store.getState());
