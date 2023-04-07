import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const carouselSlide = document.querySelector(".carousel");
  const carouselImages = document.querySelectorAll(".carousel-v1-image picture");

  // Buttons
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
  });

  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      div.className = 'carousel-v1-image';
      
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
