let palavra = 'DIGITANDO...'

for(let i = 0;i<palavra.length;i++){
    let epa = setInterval(printae(palavra[i]),1000);
};

function printae(palavra){
    console.log(palavra);
}

