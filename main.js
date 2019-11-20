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

 window.addEventListener('scroll', parallax);

  function parallax()  {
    const elem = window.pageYOffset;
    if (window.matchMedia("(min-width: 840px)").matches) {
      const elem = window.pageYOffset;
      this.document.querySelectorAll('.scrollMiddle').forEach(scrollMiddle => {
       scrollMiddle.style.transform = 'translateY(' + elem / 10  +'px)'
      });  
      this.document.querySelectorAll('.scrollLast').forEach(scrollLast => {
        scrollLast.style.transform = 'translateY(' + elem / 4  +'px)'
      }); 
    }
  }
