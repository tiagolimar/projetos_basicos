"use strict";

// Dicionário dos campos do tabuleiro
let fields = {}
Array.from(document.querySelectorAll('.field')).forEach(f=>fields[f.id] = f)

// Variáveis do jogo
let restart = false
let player = 1
let fields_player_zero = []
let fields_player_one = []
let easy_mode = false

// Função de inicialização do jogo
let init = (e) => {
    // Limpa as mensagens
    success.innerHTML = ''
    danger.innerHTML = ''
    comentary.innerHTML = 'Sua vez! Clique AQUI para reiniciar'

    // Reinicia as variáveis do jogo
    player = 1
    fields_player_zero = []
    fields_player_one = []
    restart = false
    fields = {}

    // Reinicia o dicionário dos campos do tabuleiro
    Array.from(document.querySelectorAll('.field')).forEach(f=>{
        f.innerHTML = ''
        fields[f.id] = f
    })

    // Executa uma nova jogada
    play(e)
}

let getRandomId = () => {
    let availableIds = Object.keys(fields)
    let randomIndex = Math.floor(Math.random() * availableIds.length)
    return availableIds[randomIndex]
  }

let defineId = ()=>{
    let id = false
    if (easy_mode){
        id = getRandomId()
    }else{
        id = simulatePossiblePlays(fields_player_zero)
        
        if(id == false) id = simulatePossiblePlays(fields_player_one)
        
        if(id == false) id = getRandomId()

    }
    return id
}

// Função para executar uma jogada
let play = e => {
    if(!restart){
        if(!player){
            // Jogada da CPU
            let id = defineId()
            fields[id].innerHTML = 'O'
            fields_player_zero.push(id)
            delete fields[id]
            testVitory(fields_player_zero,0)
            player = 1
        }else{
            // Jogada do jogador
            if(!e.target.innerHTML){
                let id = e.target.id
    
                e.target.innerHTML = 'X'
                fields_player_one.push(id)
                delete fields[id]
                
                testVitory(fields_player_one,1)
                player = 0
                if(!restart) play()
            }
        }
    }
}

// Função para executar ações após uma vitória
let afterVictory = (status)=>{
    if (!status){
        // Vitória da CPU
        win_zero.innerHTML = +win_zero.innerHTML + 1
        danger.innerHTML = 'Você perdeu!'
    }else if (status==1){
        // Vitória do jogador
        win_one.innerHTML = +win_one.innerHTML + 1
        success.innerHTML = 'Você venceu!'
    }else if(status==2){
        // Empate
        comentary.innerHTML = 'Empate!<br>Clique AQUI para reiniciar'
        count_play.innerHTML = +count_play.innerHTML + 1
        restart = true
        return
    }
    count_play.innerHTML = +count_play.innerHTML + 1
    comentary.innerHTML = 'Clique AQUI para reiniciar.'
    restart = true
}

// Função para verificar se há uma vitória
let isVictory = (list)=>{
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


// Função para testar a vitória
let testVitory = (list,status,simulation=false)=>{
    if (list.length>2){
        list = list.sort()

        if(list.length==3){
            if(isVictory(list)) afterVictory(status)
        }else{
            getCombinations(list,3).forEach(combination=>{
                if(isVictory(combination)) afterVictory(status)
            })

        }
        if(Object.keys(fields)==0 && !restart) afterVictory(2)
    }
}

// Função para simular uma jogada
let simulatePossiblePlays = l =>{
    let id = false
    if (l.length > 1){
        for (let key of Object.keys(fields)){
            let list = l.concat(key)
            list = list.sort()
            getCombinations(list,3).forEach(combination=>{
                if(isVictory(combination)) {
                    id = key
                    return id
                }
            })
        }
    }
    return id
}

let changeMode = () => easy_mode = !easy_mode

// Função para obter todas as combinações possíveis
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