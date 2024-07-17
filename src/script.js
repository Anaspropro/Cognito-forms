let slideIndex = 1
showSlides(slideIndex)

const currentSlide = () =>{
  showSlides(slideIndex = n)
}

const showSlides = () =>{
  let i;
  let slides = document.getElementById("change");
  let icons = document.getElementById("small-icon")

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) {slideIndex = slides.length}
  for (i =0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i =0; i < icons.length; i++){
    icons[i].className = icons[i].className.replace("active", "") 
  }
  slides[slideIndex-1].style.display = "block";
  icons[slideIndex-1].className += "active";
}