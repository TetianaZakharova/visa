'use strict';

const card = document.querySelector('.header-card');

card.addEventListener('mousemove', startRotate)
card.addEventListener('mouseout', stopRotate)

function startRotate(event){
  const cardImg = this.querySelector('.header-card-img');
  const halfheight = cardImg.offsetHeight / 2;
  const halfwidth = cardImg.offsetWidth / 2;

  cardImg.style.transform = 'rotateX('+(event.offsetY - halfheight) / 5 +'deg) rotateY('+-(event.offsetX - halfwidth) / 5 +'deg)'
}

function stopRotate(event){
  const cardImg = this.querySelector('.header-card-img');
  cardImg.style.transform = 'rotate(0)';
}

