function monitoring_stars(){
    let count = '';
    function countdivs(){
      let divs = document.querySelectorAll('.star');
      if(count != `${divs.length} stars`){
        count = `${divs.length} stars`;
        console.log(count);
      }
    }
    setInterval(countdivs, 1000);
  }
  
  monitoring_stars();