let slide = document.querySelectorAll('.slide');
var current = 0;

function cls() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    cls();
    if (current === slide.length - 1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}

function prev() {
    cls();
    if (current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}

function start() {
    cls();
    slide[current].style.display = 'block';
}
start();

window.addEventListener('scroll', function() {
  var element = document.querySelector('.fade-in');
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    element.style.opacity = 1;
  } else {
    element.style.opacity = 0;
  }
});

function nextSlide(sectionId) {
  const section = document.getElementById(sectionId);
  const slides = section.getElementsByClassName('slide');
  let currentSlideIndex = 0;
  
  for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display === 'block') {
          currentSlideIndex = i;
          break;
      }
  }
  
  slides[currentSlideIndex].style.display = 'none';
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].style.display = 'block';
}

function prevSlide(sectionId) {
  const section = document.getElementById(sectionId);
  const slides = section.getElementsByClassName('slide');
  let currentSlideIndex = 0;
  
  for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display === 'block') {
          currentSlideIndex = i;
          break;
      }
  }
  
  slides[currentSlideIndex].style.display = 'none';
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  slides[currentSlideIndex].style.display = 'block';
}
