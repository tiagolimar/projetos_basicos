"use strict";

let fields = {}
Array.from(document.querySelectorAll('.field')).forEach(f=>fields[f.id] = f)

let restart = false
let player = 1
let fields_zero = []
let fields_one = []
let easy_mode = false

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

let get_random_id = () =>{
    let id_disponiveis = Object.keys(fields)
    let id = Math.floor(Math.random()*id_disponiveis.length)
    id = id_disponiveis[id]
    return id
}

let define_id = ()=>{
    let id = false
    if (easy_mode){
        id = get_random_id()
    }else{
        id = predict_play(fields_zero)
        
        if(id == false) id = predict_play(fields_one)
        
        if(id == false) id = get_random_id()

    }
    console.log(id);
    return id
}

let play = e => {
    if(!restart){
        if(!player){
            let id = define_id()
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
}

let after_victory = (status)=>{
    if (!status){
        win_zero.innerHTML = +win_zero.innerHTML + 1
        danger.innerHTML = 'Você perdeu!'
    }else if (status==1){
        win_one.innerHTML = +win_one.innerHTML + 1
        success.innerHTML = 'Você venceu!'
    }else if(status==2){
        comentary.innerHTML = 'Empate!<br>Clique AQUI para reiniciar'
        count_play.innerHTML = +count_play.innerHTML + 1
        restart = true
        return
    }
    count_play.innerHTML = +count_play.innerHTML + 1
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

let test_vitory = (list,status,simulation=false)=>{
    if (list.length>2){
        list = list.sort()

        if(list.length==3){
            if(is_victory(list)) after_victory(status)
        }else{
            getCombinations(list,3).forEach(combination=>{
                if(is_victory(combination)) after_victory(status)
            })

        }
        if(Object.keys(fields)==0 && !restart) after_victory(2)
    }
}

let predict_play = l =>{
    let id = false
    if (l.length > 1){
        for (let key of Object.keys(fields)){
            let list = l.concat(key)
            list = list.sort()
            getCombinations(list,3).forEach(combination=>{
                if(is_victory(combination)) {
                    id = key
                    return id
                }
            })
        }
    }
    return id
}

let change_mode = ()=>easy_mode = !easy_mode