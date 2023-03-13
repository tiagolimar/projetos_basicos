let count_stars = 160;

let locations = [];
let rotations = [];
let firts_execution = true;
let contador = 0;

let root = document.querySelector(':root');
let vel = getComputedStyle(root).getPropertyValue('--vel').replace('ms', '');

function generate_data(){
  for(let i=0; i<count_stars; i++){
    let originX = window.innerWidth/2;
    let originY = window.innerHeight/2;
    let y = Math.random()*window.innerHeight*0.20;
    let x = Math.random()*window.innerWidth*0.20;
    
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