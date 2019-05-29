document.addEventListener('scroll', scroller);

function scroller(){
  let x = window.scrollY;
  let y = document.querySelector('ul');
  let nav = document.querySelector('nav');
  let navPos = window.scrollY;

  if(x == 33){
    //y.classList.add('scrolled');
    console.log('here');
    console.log(nav.getBoundingClientRect());
  } else {
    //y.classList.remove('scrolled');
  }
}
