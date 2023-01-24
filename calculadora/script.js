function Calcular(botao){
    let entradas = document.getElementsByTagName('input');

    let valor1 = '';
    let valor2 = '';
    let saida = document.getElementById('resultado');

    Array.from(entradas).forEach(function (entrada){
        
        let valor = entrada.value.replace(/\D/g,'');

        if (entrada.value == ''){
            alert('Preencha o campo "'+ entrada.placeholder + '" com um valor válido');
            return null
        }

        valor = +valor;

        if (valor1 ==''){
            valor1 = valor;
        }else{
            valor2 = valor;
        }
    });

    let calculadora = {
        '+':function soma (x,y){return x+y},
        '-':function sub (x,y){return x-y},
        '/':function divi (x,y){return x/y},
        '*':function multi (x,y){return x*y}
    }

    let calculo = calculadora[botao.innerHTML];

    saida.innerHTML = 'O resultado é: ' + calculo(valor1,valor2);
}