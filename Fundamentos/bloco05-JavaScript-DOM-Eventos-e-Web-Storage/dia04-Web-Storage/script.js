let background = document.querySelector("#background");
let color = document.querySelector("#color");
let size = document.querySelector("#size");
let space = document.querySelector("#space");
let style = document.querySelector('#style');
let btn = document.querySelector('#btn');
let txt = document.querySelector('#text');



btn.addEventListener('click', function(){
    if(background.value == ''){
        alert("Coloque uma cor de fundo do texto");
    }
    if(color.value == ''){
        alert("Coloque uma cor para o texto");
    }
    if(size.value == ''){
        alert("Coloque um tamanho para o texto");
    }
    if(space.value == ''){
        alert("Coloque um espaçamento para o texto");
    }
    /* if(Style.value == ''){
        alert("Coloque uma fonte para o texto");
    } */

    aplicaBackground();
    aplicaColor();
    aplicaSize();
    aplicaSpace();
    /* aplicaStyle(); */
    
})

function aplicaBackground(){
    txt.style.backgroundColor = background.value;
    localStorage.setItem('background', background.value);
}

function aplicaColor(){
    txt.style.color = color.value;
    localStorage.setItem('color', color.value);
}

function aplicaSize(){
    txt.style.fontSize = size.value + 'px';
    localStorage.setItem('size', (size.value));
}

function aplicaSpace(){
    txt.style.lineHeight = space.value;
    localStorage.setItem('space', space.value);
}

/* function aplicaStyle(){
    txt.style.fontFamily = style.value;
} */

function carregaPagina(){
    if(localStorage.getItem('background') != ''){
        txt.style.backgroundColor = localStorage.getItem('background');
    }
    if(localStorage.getItem('color', color.value) != ''){
        txt.style.color = localStorage.getItem('color');
    }
    if( localStorage.getItem('size', size.value != '')){
        txt.style.fontSize = localStorage.getItem('size') + 'px';
    }
    if(localStorage.getItem('space', space.value) != ''){
        txt.style.lineHeight = localStorage.getItem('space');
    }

}

window.onload = carregaPagina;