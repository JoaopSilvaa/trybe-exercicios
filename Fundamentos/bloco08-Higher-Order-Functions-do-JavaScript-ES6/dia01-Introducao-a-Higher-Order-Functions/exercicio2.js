const check = (numero, sorteado) => {
  if (numero !== sorteado){
      return 'Tente novamente';
  }
  return 'Parabéns você ganhou';
}

const sorteio = (number, check) => {
    const sorteado = Math.round(Math.random() * 5);
    return console.log(check(number, sorteado));
}

sorteio(4,check);

