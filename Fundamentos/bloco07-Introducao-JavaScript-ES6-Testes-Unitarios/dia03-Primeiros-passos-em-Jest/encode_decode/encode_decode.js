function encode(palavra) {
    let modPalavra = [];
    let newPalavra = "";
  
    for(let i of palavra){
      modPalavra.push(i);
    }
  
    for(let i = 0; i < modPalavra.length; i += 1){
      if(modPalavra[i] === 'a'){
        modPalavra[i] = '1';
      }else if(modPalavra[i] === 'e'){
        modPalavra[i] = '2';
      }else if(modPalavra[i] === 'i'){
        modPalavra[i] = '3';
      }else if(modPalavra[i] === 'o'){
        modPalavra[i] = '4';
      }else if(modPalavra[i] === 'u'){
        modPalavra[i] = '5';
      }
    }
  
    for(let i = 0; i < modPalavra.length; i += 1){
      newPalavra = newPalavra + "" +modPalavra[i];
    }
  
    return newPalavra;
  }
  
  function decode(palavra) {
    let modPalavra = [];
    let newPalavra = "";
  
    for(let i of palavra){
      modPalavra.push(i);
    }
  
    for(let i = 0; i < modPalavra.length; i += 1){
      if(modPalavra[i] === '1'){
        modPalavra[i] = 'a';
      }else if(modPalavra[i] === '2'){
        modPalavra[i] = 'e';
      }else if(modPalavra[i] === '3'){
        modPalavra[i] = 'i';
      }else if(modPalavra[i] === '4'){
        modPalavra[i] = 'o';
      }else if(modPalavra[i] === '5'){
        modPalavra[i] = 'u';
      }
    }
  
    for(let i = 0; i < modPalavra.length; i += 1){
      newPalavra = newPalavra + "" +modPalavra[i];
    }
  
    return newPalavra;
  }

  module.exports = {encode, decode}