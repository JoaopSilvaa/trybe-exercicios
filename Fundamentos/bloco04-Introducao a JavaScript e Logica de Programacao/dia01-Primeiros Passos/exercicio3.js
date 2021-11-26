let peca = "rainha";

let xadrez = peca.toLowerCase();

switch(xadrez){
    case "bispo":
        console.log("bispo -> diagonais");
        break;
    case "cavalo":
        console.log("cavalo -> em L");
        break;
    case "rainha":
        console.log("rainha -> todos os movimentos");
        break;
    case "peão":
        console.log("peão -> apenas para frente");
        break;
    case "torre":
        console.log("torre -> para frente e para os lados");
        break;
    case "rei":
        console.log("rei -> uma casa por vez");
        break;
    default:
        console.log("ERROR");
        break;
}
