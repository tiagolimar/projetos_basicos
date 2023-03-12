let root = document.querySelector(':root');
// let vel_animation = root.style.getProperty('--vel');
// console.log(vel_animation);
function main() {
  let little_star = document.createElement('div');

  let originX = window.innerWidth/2;
  let originY = window.innerHeight/2;
  let y = Math.random()*window.innerHeight*0.10;
  let x = Math.random()*window.innerWidth*0.20;

  little_star.classList.add('star');
  little_star.classList.add(`i-${contador}`);

  function setPosition(){
    y = [-y, y][Math.floor(Math.random()*2)]+originY;
    x = [-x, x][Math.floor(Math.random()*2)]+originX;

    little_star.style = `top:${y}px;left:${x}px`;
  }

  function setRotation(){
    let dy = originY-y;
    let dx = x-originX;
    let ady = Math.abs(dy);
    let adx = Math.abs(dx);

    let ang = (Math.atan2(dy, dx) * 180) / Math.PI;

    if(dx < 0 || dy < 0){
      ang = (90 - (ang + 180)) + 0;
    }
    if(dx < 0 || dy > 0){
      ang = (180 - ang) + 90;
    }
    if(dx > 0 || dy > 0){
      ang = (270 - (ang + 180)) + 180;
    }
    if(dx > 0 || dy < 0){
      ang = 270 - ang;
    }

    root.style.setProperty(`--ang${contador}`,ang+'deg');
  }

  setPosition();
  setRotation();

  document.body.appendChild(little_star);

  little_star.addEventListener('animationend', () => {
    little_star.remove();
    main();
  });

  contador++;
  if(contador == 180){
    contador = 0;
    clearInterval(constelation);
  }
}

let contador = 0;

constelation = setInterval(main, 700/180);


