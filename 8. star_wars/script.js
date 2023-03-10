function main() {
  let little_star = document.createElement('div');
  let root = document.querySelector(':root');
  let display = document.querySelector('.display-angle');

  little_star.id = 'star';

  function setPosition(){
    y = Math.random()*100;
    x = Math.random()*100;

    window.innerHeight
    window.innerWidth

    little_star.style = `top:${y}%;left:${x}%`;
  }

  function setRotation(){
    dy = 50-y;
    dx = x-50;
    tan = dy/dx;
    ang = Math.atan(tan)*(180/Math.PI);

    if (dy<0 && dx>0){
      ang+=360;
    }
    else if (dy>0){
      ang+=180;
    }

    root.style.setProperty('--ang0',ang+30+'deg');
    display.innerHTML = ang.toFixed(2)+'°';
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
