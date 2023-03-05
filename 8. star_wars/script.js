function Nchoice(num) {
  num = Math.random() * num;
  return num.toFixed();
}

function main() {
  const star = document.getElementById("star");
  cy = String(Nchoice(100));
  cx = String(Nchoice(100));

  star.style = "top:"+cy+"%;left:"+cx+"%;";
}


main();

