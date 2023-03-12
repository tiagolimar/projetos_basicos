function main() {
  let cateto_o = document.getElementById('cateto-o');
  let cateto_a = document.getElementById('cateto-a');


  let little_star = document.createElement('div');
  let root = document.querySelector(':root');
  let display = document.querySelector('.display-angle');

  let originX = window.innerWidth/2;
  let originY = window.innerHeight/2;
  let y = Math.random()*window.innerHeight*0.10;
  let x = Math.random()*window.innerWidth*0.20;

  little_star.id = 'star';

  function setPosition(){
    y = [-y, y][Math.floor(Math.random()*2)]+originY;
    x = [-x, x][Math.floor(Math.random()*2)]+originX;

    little_star.style = `top:${y}px;left:${x}px`;
    cateto_o.style = `top:${y}px;left:${x}px`;
    cateto_a.style = `top:${y}px;left:${x}px`;
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

    root.style.setProperty('--ang0',ang+'deg');

    cateto_a.style.height = adx + 'px';
    cateto_o.style.height = ady + 'px';
    if (dy < 0){
      cateto_o.style.transform = 'rotate(180deg)';
    }else{
      cateto_o.style.transform = 'rotate(0deg)';
    }
    if (dx < 0){
      cateto_a.style.transform = 'rotate(270deg)';
    }else{
      cateto_a.style.transform = 'rotate(90deg)';
    }

    display.innerHTML = `${dx.toFixed(2)}px - ${dy.toFixed(2)}px - ${ang.toFixed(2)}°`;
  }

  setPosition();
  setRotation();

  document.body.appendChild(little_star);

  little_star.addEventListener('animationend', () => {
    little_star.remove();
    main();
  });
}

main();

