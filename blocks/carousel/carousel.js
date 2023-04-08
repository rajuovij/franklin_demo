import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const ul = document.createElement('div');
  ul.className = 'carousel-v1-image';
  [...block.children].forEach((row) => {
    const li = document.createElement('div');
    li.innerHTML = row.innerHTML;
    
    //[...li.children].forEach((div) => {
      //if (div.children.length === 1 && div.querySelector('picture'))  div.className = 'carousel-v1-image';
      
    //});
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);

  /*const aNext = document.createElement('a');
  const aPrevious = document.createElement('a');
  aNext.className = 'next';
  aPrevious.className = 'prev';
  block.append(aNext);
  block.append(aPrevious);*/

  const carouselSlide = document.querySelector(".carousel-v1-image");
  const carouselImages = document.querySelectorAll(".carousel-v1-image picture");

  // Set up the automatic loop
let slideIndex = 0;
const slideInterval = setInterval(nextSlide, 2000);

// Move the carousel to the next slide
function nextSlide() {
  if (slideIndex >= carouselImages.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  carouselSlide.style.transform = "translateX(-" + slideIndex * 100 + "%)";
}

// Stop the automatic loop when the user hovers over the carousel
carouselSlide.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

// Resume the automatic loop when the user stops hovering over the carousel
carouselSlide.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 10000);
});

  /*// Buttons
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Counter
  let counter = 1;
  const size = carouselImages[0].clientWidth;

  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

  // Button listeners
  nextBtn.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  });

  // Looping
  carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastClone") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - 2;
      carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if (carouselImages[counter].id === "firstClone") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
  });*/

  
}
