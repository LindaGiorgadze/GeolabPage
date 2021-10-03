// burger bar & navigation
let toggleButton = document.getElementById("toggleButton");
let navbarLinks = document.getElementById("navbarLinks");
toggleButton.addEventListener("click", function(){
  navbarLinks.classList.toggle("open");
})
const menuBtn = document.querySelector(".burger-bar-div");
const logoBox = document.querySelector(".logo-div");
let menuOpen = false;
menuBtn.addEventListener("click", ()=>{
  if(!menuOpen){
    menuBtn.classList.add("opened");
    logoBox.classList.add("opened")
    menuOpen = true;
  }else{
    menuBtn.classList.remove("opened");
    logoBox.classList.remove("opened")
    menuOpen = false;
  }
});
const mainContent2 = document.querySelector(".main-content2");
const page3 = document.querySelector(".page3");
const screenWidth = screen.width;
let allBlocks = page3.querySelectorAll(".block");
const design = page3.querySelector(".resp1 .bk1");
const development = page3.querySelector(".resp2 .bk1");
const management = page3.querySelector(".resp3 .bk1");
if (screenWidth < 769) {
  console.log(screenWidth);
  allBlocks.forEach(block => {
    block.addEventListener("click", () => {
      page3.classList.add("hide");
      if (block.classList.contains("resp1")) {
        mainContent2.appendChild(design);
        design.style.display = "block";
      }if (block.classList.contains("resp2")) {
        mainContent2.appendChild(development);
        development.style.display = "block";
      }else{
        mainContent2.appendChild(management);
        management.style.display = "block";   
      }
    })
  });
}
