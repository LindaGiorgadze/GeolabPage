// burger bar & navigation
let toggleButton = document.getElementById('toggleButton');
let navbarLinks = document.getElementById('navbarLinks');

toggleButton.addEventListener('click', function(){
  navbarLinks.classList.toggle('open');
})