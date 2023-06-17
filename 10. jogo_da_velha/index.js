"use strict";

let fields = {}
Array.from(document.querySelectorAll('.field')).forEach(f=>fields[f.id] = f)

let player = 0
let fields_zero = []
let fields_one = []

let play = e=>{
    if(!player){
        let id_disponiveis = Object.keys(fields)
        let id = Math.floor(Math.random()*id_disponiveis.length)
        id = id_disponiveis[id]

        fields[id].innerHTML = 'O'
        fields_zero.push(id)
        delete fields[id]
        test_vitory(fields_zero)
        player = 1
    }else{
        if(!e.target.innerHTML){
            let id = e.target.id

            e.target.innerHTML = 'X'
            fields_one.push(id)
            delete fields[id]
            
            test_vitory(fields_one)
            player = 0
            play()
        }
    }
}

let test_vitory = (list)=>{
    if (list.length>2){
        list = list.sort()

        if(list.length==3){
            if(is_victory(list)) console.log('vistory');
        }else{
            getCombinations(list,3).forEach(combination=>{
                if(is_victory(combination)) console.log('victory');
            })

        }
    }
}

let is_victory = (list)=>{
    list = list.sort()
    let dif1 = list[1]-list[0]
    let dif2 = list[2]-list[1]

    if(dif1 != 2 && dif2 != 2){
        if((dif1 == 1 && dif2 == 1)&&(list[0]==1 || list[0]==4 || list[0]==7)){
            return true
        }if ((dif1 == dif2)&&(dif1>2)){
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
