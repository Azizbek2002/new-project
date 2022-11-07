window.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.querySelector(".burger_menu"),
  burMenu = document.querySelector('.burMenu'),
  close = document.querySelector('.close'),
  ulMenu = document.querySelector('.ul'),
  animClas = document.querySelector('.why_us_content1'),
  animClas1 = document.querySelector('.why_us_content2'),
  send = document.querySelector('.send'),
  orderNow = document.querySelector('.order_now');


  burgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    burMenu.classList.add('animActive')
    burMenu.classList.remove('closeMenu')
    burMenu.classList.remove('none')
    close.classList.remove('none')
    setTimeout(() =>{
      document.querySelector('.ul').classList.remove('none')
    },300)
  });

  close.addEventListener("click", function (e) {
    e.preventDefault();
    burMenu.classList.remove('animActive')
    burMenu.classList.add('closeMenu')
    close.classList.add('none')
    ulMenu.classList.add('none')
    setTimeout(() => {
    },400);
  });
 
  window.addEventListener('scroll',() =>{
    let scrollTop = window.scrollY;
    if(scrollTop >= 180){
      animClas.classList.add('opacityAnimation'
      )
      animClas1.classList.add('opacityAnimation'
      )
    }
  })

  send.addEventListener('click',(e) => {
    e.preventDefault()
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo({
      behavior: "smooth",
    });
    orderNow.classList.add('opacityAnimation');
    orderNow.style.display = 'block';
  
  })
  





});
