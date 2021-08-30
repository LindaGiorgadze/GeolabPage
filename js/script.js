// burger bar & navigation
let toggleButton = document.getElementById('toggleButton');
let navbarLinks = document.getElementById('navbarLinks');

toggleButton.addEventListener('click', function(){
  navbarLinks.classList.toggle('open');
})

const menuBtn = document.querySelector('.burger-bar-div');
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
  if(!menuOpen){
    menuBtn.classList.add('opened');
    menuOpen = true;
  }else{
    menuBtn.classList.remove('opened');
    menuOpen = false;
  }
});