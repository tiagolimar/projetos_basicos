let star = document.getElementById("star");
let new_star = star;

function choice_coord() {
  let cy = Math.random() * 100;
  let cx = Math.random() * 100;
  let style_c = "top:"+cy+"%;left:"+cx+"%;"
  return style_c;
}

function find_dist(){
  let y = innerHeight;
  let x = innerWidth;
  if (y>x){return y/2}else{return x/2}
}

function main() {
  let angle = Math.random()*360;
  let rad = angle * Math.PI / 180;
  let scale = 100;
  let dist_max = find_dist();
  let x = Math.cos(rad)*dist_max;
  let y = Math.sin(rad)*dist_max;
  
  const sheet = new CSSStyleSheet();
  const keyframes = new KeyframeEffect(
    star,
    [
      { transform: "translate(0px, 0px) rotate("+rad+"rad) scale(1,1)" },
      { transform: "translate("+x+"px, "+y+"px) rotate("+rad+"rad) scale("+scale+",1)" }
    ],
    { duration: 1000 }
  );
  
  // const styleSheet = document.styleSheets[1];
  console.log(styleSheet);
  sheet.insertRule("@keyframes hyperspace {"+keyframes.cssText+"}");
  document.adoptedStyleSheets = [sheet];

//   function animate() {
//     dist += 20;
//     scale += 2;

//     x = Math.cos(rad)*dist;
//     y = Math.sin(rad)*dist;
    
//     const transform = "translate(${x}px, ${y}px) rotate(${rad}rad) scale(${scale},1)";
    
//     star.style.transform = transform;
    
//     window.requestAnimationFrame(animate);
    
//     if (x > window.innerWidth/2 || y > window.innerHeight/2){
//       star.remove();
//       star = document.createElement("div");
//       star.id = "star";
//       document.body.appendChild(star);
//       main();
//     }
//   }

//   animate();
}

function duplicate_star() {
  star_copy = star.cloneNode(star);
  styleC = choice_coord();
  star_copy.style = styleC;
  star.parentNode.appendChild(star_copy);
}

main();