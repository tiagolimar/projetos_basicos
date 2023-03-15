let count_stars = 160;
let count_fake_stars = 900;
let colors = ['#f4a46085','#759ef785','#f0e68c85','#ffffff85','#9bb7d485','#ffffff85'];

let positions = [];
let rotations = [];
let galaxy = [];
let fake_galaxy = [];
let count_hyperspace = 0;
let font_size = 0;
let transparent_level = 0;
let firts_execution = true;
let contador = 0;

let display = document.querySelector('#display')
let root = document.querySelector(':root');
let vel = getComputedStyle(root).getPropertyValue('--vel').replace('s', '');

function generate_star(expansion){
  let originX = window.innerWidth/2;
  let originY = window.innerHeight/2;
  let y = Math.random()*window.innerHeight*expansion;
  let x = Math.random()*window.innerWidth*expansion;

  y = [-y, y][Math.floor(Math.random()*2)]+originY;
  x = [-x, x][Math.floor(Math.random()*2)]+originX;
  
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
  
  let position = `top:${y.toFixed(2)}px;left:${x.toFixed(2)}px`;
  let rotation = ang.toFixed(2)+'deg';

  return [position,rotation]
}

for(let i=0; i<count_stars; i++){
  let [position,rotation] = generate_star(0.10);
  positions.push(position);
  rotations.push(rotation);
}

for (let i=0;i<count_fake_stars; i++){
  let [position,rotation] = generate_star(0.5);
  let little_fake_star = document.createElement('div');

  little_fake_star.classList.add('star');
  little_fake_star.style = position;

  let size = Math.random()*4;
  size = Math.ceil(size);

  let id_color = Math.floor(Math.random()*colors.length);
  let color = colors[id_color];

  little_fake_star.style.width = `${size}px`;
  little_fake_star.style.height = `${size}px`;
  little_fake_star.style.backgroundColor = color;

  fake_galaxy.push(little_fake_star);
  document.body.appendChild(little_fake_star);
}

function main() {
  let little_star = document.createElement('div');
  
  little_star.classList.add('star');
  little_star.classList.add(`i-${contador}`);
  little_star.style = positions[contador];

  let size = Math.random()*6;
  size = Math.ceil(size);

  let id_color = Math.floor(Math.random()*colors.length);
  let color = colors[id_color];

  little_star.style.width = `${size}px`;
  little_star.style.height = `${size}px`;
  little_star.style.backgroundColor = color;

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

constelation = setInterval(main, 1000/count_stars);

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

      for (let fake_star of fake_galaxy){
        fake_star.remove();
      }
    }
  }
}

document.addEventListener("keydown", teclaPressionada);