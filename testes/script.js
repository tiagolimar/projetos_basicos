corpo = document.getElementsByTagName("body")[0];
caixa = document.getElementsByClassName("box")[0];

let letra = document.createElement('div');
letra.setAttribute("class","letra");

caixa.insertBefore(letra,corpo);