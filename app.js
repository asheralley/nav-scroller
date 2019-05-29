document.addEventListener('scroll', scroller);

function scroller(){
  let x = window.scrollY;
  let y = document.querySelector('ul');
  if(x >= 35){
    y.classList.add('scrolled');
  } else {
    y.classList.remove('scrolled');
  }
}
