// Palíndromos
function palin(palavra){
    let troca  = [];
    let nome = "";
    for(let word of palavra){
        troca.push(word);
    }
    troca.reverse();
    
    for(let i = 0; i < troca.length; i+=1){
        nome = (nome + "" + troca[i]);
    }
    if(palavra === nome){
        return true;
    }else{
        return false;
    }
}

console.log(palin("lol"));

//Retornar o indice do maior valor

function maior(array){
    let maior = 0;
    let indice = 0;
    for (let i= 0; i< array.length; i+=1){
        if(array[i] > maior){
            maior = array[i];
            indice = i;
        }
    }
    return console.log(indice);
}

maior([2, 3, 6, 7, 10, 1]);