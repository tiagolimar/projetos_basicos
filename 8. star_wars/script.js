function main() {
  let little_star = document.createElement('div');
  let root = document.querySelector(':root');
  let display = document.querySelector('.display-angle');

  little_star.id = 'star';

  function setPosition(){
    y = Math.random()*100;
    x = Math.random()*100;
  
    little_star.style.top = y+'%';
    little_star.style.left = x+'%';
  }

  function setRotation(){
    dy = 50-y;
    dx = x-50;
    tan = dy/dx;
    ang = Math.atan(tan)*(180/Math.PI)+270;
    root.style.setProperty('--ang0',ang+'deg');
    display.innerHTML = ang.toFixed(2)+'°';
    // console.log(x.toFixed(2) +" ; "+y.toFixed(2)+" ; "+dx.toFixed(2)+" ; "+dy.toFixed(2)+" ; "+ang.toFixed(2));
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