// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function alo (event){
    event.preventDefault();
}

HREF_LINK.addEventListener('click', alo);
INPUT_CHECKBOX.addEventListener('click', alo);

function r (event){
    if(event.key() === "a"){
    event.preventDefault();
 }
}

INPUT_TEXT.addEventListener('keypress', r);