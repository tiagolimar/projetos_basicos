let count_stars = 160;
let colors = ['#f4a46085','#759ef785','#f0e68c85','#ffffff85','#9bb7d485','#ffffff85'];

let locations = [];
let rotations = [];
let galaxy = [];
let count_hyperspace = 0;
let font_size = 0;
let transparent_level = 0;
let firts_execution = true;
let contador = 0;

let display = document.querySelector('#display')
let root = document.querySelector(':root');
let vel = getComputedStyle(root).getPropertyValue('--vel').replace('s', '');

function generate_data(){
  for(let i=0; i<count_stars; i++){
    let originX = window.innerWidth/2;
    let originY = window.innerHeight/2;
    let y = Math.random()*window.innerHeight*0.3;
    let x = Math.random()*window.innerWidth*0.3;
    
    function setPosition(){
      y = [-y, y][Math.floor(Math.random()*2)]+originY;
      x = [-x, x][Math.floor(Math.random()*2)]+originX;
  
      locations.push(`top:${y.toFixed(2)}px;left:${x.toFixed(2)}px`);
    }
  
    function setRotation(){
      let dy = originY-y;
      let dx = x-originX;
      let ady = Math.abs(dy);
      let adx = Math.abs(dx);
  
      let ang = (Math.atan2(dy, dx) * 180) / Math.PI;
  
      if(dx < 0 || dy < 0){
        ang = -90 - ang;
      }else{
        ang = 270 - ang;
      }
  
      rotations.push(ang.toFixed(2)+'deg');
    }
    
    setPosition();
    setRotation();
  }
}

generate_data();

function main() {
  let little_star = document.createElement('div');
  
  little_star.classList.add('star');
  little_star.classList.add(`i-${contador}`);
  little_star.style = locations[contador];

  function setStyle(){
    size = Math.random()*5;
    size = Math.ceil(size)+1;

    id_color = Math.floor(Math.random()*colors.length);
    color = colors[id_color];

    little_star.style.width = `${size}px`;
    little_star.style.height = `${size}px`;
    little_star.style.backgroundColor = color;
    console.log(color);
  }
  setStyle();
  root.style.setProperty(`--ang${contador}`,rotations[contador]);

  document.body.appendChild(little_star);

  contador++;

  if(contador == count_stars){
    if(firts_execution){
      clearInterval(constelation);
      firts_execution = false;
    }
  }
}

constelation = setInterval(main, +vel/count_stars);

function teclaPressionada(event) {
  if (event.keyCode === 38) {
    count_hyperspace += 1;
    font_size = 32+4*count_hyperspace;
    transparent_level = 30 + 15*count_hyperspace;

    if(count_hyperspace<5){
      display.style.fontSize = `${font_size}px`;
      display.style.color = `#ffffff${transparent_level}`;
    }else{
      display.classList.add('flash');
      display.style.color = '#ffffff00';
      root.style.setProperty('--vel',`800ms`);
    }
  }
}

document.addEventListener("keydown", teclaPressionada);