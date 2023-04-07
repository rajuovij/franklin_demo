import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  /*[...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      div.className = 'menu-body';
    });
    ul.append(li);
  });*/

  document.querySelectorAll('.block').forEach((block) => {
    const li = document.createElement('li');
    li.innerHTML = block.getAttribute('data-block-name');
    li.onclick = function() { alert(block.getAttribute('data-block-name')); document.querySelector(`.${block.getAttribute('data-block-name')}-container`).scrollIntoView(); };
    ul.append(li);
  });

  //ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
