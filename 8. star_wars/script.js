function main() {
  let little_star = document.createElement('div');
  let root = document.querySelector(':root');
  let display = document.querySelector('.display-angle');

  let originX = window.innerWidth/2;
  let originY = window.innerHeight/2;
  let y = Math.random()*30;
  let x = Math.random()*30;

  little_star.id = 'star';

  function setPosition(){
    y = [-y, y][Math.floor(Math.random()*2)]+originY;
    x = [-x, x][Math.floor(Math.random()*2)]+originX;

    little_star.style = `top:${y}px;left:${x}px`;
  }

  function setRotation(){
    let dy = originY-y;
    let dx = x-originX;
    let ady = Math.abs(y);
    let adx = Math.abs(x);

    let ang = (Math.atan2(dy, dx) * 180) / Math.PI;

    root.style.setProperty('--ang0',ang+'deg');

    display.innerHTML = `${x.toFixed(2)}px - ${y.toFixed(2)}px - ${ang.toFixed(2)}°`;
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

