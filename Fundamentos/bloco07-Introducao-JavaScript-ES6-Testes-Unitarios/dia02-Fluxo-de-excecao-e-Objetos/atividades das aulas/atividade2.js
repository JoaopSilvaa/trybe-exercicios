let nome = '';
let chave = '';
const fun = (object, key, valor) => {
  let objeto = {};
  nome = object;
  chave = key;  
  objeto[chave] = valor;
  return objeto;
}

console.log(fun('aluno', 'idade', 18));

