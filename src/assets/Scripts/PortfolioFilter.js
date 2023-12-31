var slides = document.querySelectorAll('.PortfolioSlider-inner li');

  function ReactFilter(){

    for (let slide of slides){
  
      if (!slide.classList.contains('React')){
  
        slide.style.display = "none";
  
      } else {
  
        slide.style.display = "flex";
      }
  
    }
  };

  function OnlineFilter(){

    for (let slide of slides){
  
      if (!slide.classList.contains('Online')){
  
        slide.style.display = "none"
  
      } else {
  
        slide.style.display = "flex"
      }
  
    }
  };

  function AllFilter() {
    for (let slide of slides) {
      slide.style.display = "flex";
    }
  };