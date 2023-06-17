"use strict";

let fields = {}
Array.from(document.querySelectorAll('.field')).forEach(f=>fields[f.id] = f)

let restart = false
let player = 0
let fields_zero = []
let fields_one = []

let init = () => {
    success.innerHTML = ''
    danger.innerHTML = ''
    comentary.innerHTML = 'Sua vez! Clique AQUI para reiniciar'
    player = 0
    fields_zero = []
    fields_one = []
    restart = false
    fields = {}
    Array.from(document.querySelectorAll('.field')).forEach(f=>{
        f.innerHTML = ''
        fields[f.id] = f
    })
    play()
}

let play = e=>{
    if(!player){
        let id_disponiveis = Object.keys(fields)
        let id = Math.floor(Math.random()*id_disponiveis.length)
        id = id_disponiveis[id]

        fields[id].innerHTML = 'O'
        fields_zero.push(id)
        delete fields[id]
        test_vitory(fields_zero,0)
        player = 1
    }else{
        if(!e.target.innerHTML){
            let id = e.target.id

            e.target.innerHTML = 'X'
            fields_one.push(id)
            delete fields[id]
            
            test_vitory(fields_one,1)
            player = 0
            if(!restart) play()
        }
    }
}

let test_vitory = (list,status)=>{
    if (list.length>2){
        list = list.sort()

        if(list.length==3){
            if(is_victory(list)) after_victory(status)
        }else{
            getCombinations(list,3).forEach(combination=>{
                if(is_victory(combination)) after_victory(status)
            })

        }
        if(Object.keys(fields)==0) after_victory(2)
    }
}

let after_victory = (status)=>{
    if (!status){
        danger.innerHTML = 'Você perdeu!'
    }else if (status==1){
        success.innerHTML = 'Você venceu!'
    }else if(status==2){
        console.log(1);
        comentary.innerHTML = 'Empate!<br>Clique AQUI para reiniciar'
        restart = true
        return
    }
    comentary.innerHTML = 'Clique AQUI para reiniciar.'
    restart = true
}

let is_victory = (list)=>{
    list = list.sort()
    let dif1 = list[1]-list[0]
    let dif2 = list[2]-list[1]

    if(dif1 == dif2){
        if((dif1 == 1 )&& (list[0]==1 || list[0]==4 || list[0]==7)){
            return true
        }else if (dif1>2){
            return true
        }else if ((dif1 == 2)&&(list[0]==3)){
            return true
        }
    }
    return false
}

play()

let getCombinations = (array, size)=>{
        const combinations = [];
        
        let generateCombinations = (currentCombination, start)=>{
            if (currentCombination.length === size) {
                combinations.push([...currentCombination]);
                return;
            }
            
            for (let i = start; i < array.length; i++) {
                currentCombination.push(array[i]);
                generateCombinations(currentCombination, i + 1);
                currentCombination.pop();
            }
        }
        
        generateCombinations([], 0);
        return combinations;
    }
