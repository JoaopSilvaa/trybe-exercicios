const estado = document.getElementById('estadoUser');
const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const siglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
const btn = document.getElementById('enviar');
const btn2 = document.getElementById('limpar');
const result = document.getElementById('result');
const nome = document.getElementById('nome-completo');


for(let i = 0; i < estados.length; i ++){
    let opcoes = document.createElement('option');
    opcoes.innerText = estados[i];
    opcoes.value = siglas[i];
    estado.appendChild(opcoes);
}

function createDiv(){
  //event.preventDefault();
  let div = document.createElement('div');
  let nomecompleto = document.createElement('p');
  nomecompleto.innerText = nome.value;
  div.appendChild(nomecompleto);
  result.appendChild(div);
}

function apaga(){
  result.remove();
}


btn.addEventListener('click', createDiv);
btn2.addEventListener('click', apaga);
