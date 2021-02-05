let imode = localStorage.getItem("isDark");

let toogleStatus = document.getElementById('check-mode');
let bodyElement = document.getElementsByTagName('body')[0];
let navLogo = document.getElementsByClassName('nav-logo')[0];
let cards = document.getElementsByClassName('card');
let container = document.getElementsByClassName('page');
let footer = document.getElementsByClassName('footer');

console.log(imode);
if(imode == "true"){
  toogleStatus.checked = true;
  darkmode();
}

function darkmode(){
  if(toogleStatus.checked){
    bodyElement.className += " " + "darkmode";
    navLogo.className += " " + "darkmode";
    if(cards){
      for(let i = 0; i < cards.length; i++){
        cards[i].className += " " + "alt-background";
      }
    }
    if(container[0]){
      container[0].className += " " + "darkmode";
    }
    if(footer[0]){
      footer[0].className += " " + "darkmode";
    }
    localStorage.setItem("isDark", true);
  }else{
    bodyElement.classList.remove('darkmode');
    navLogo.classList.remove('darkmode');
    if(cards){
      for(let i = 0; i < cards.length; i++){
        cards[i].classList.remove('alt-background');
      }
    }
    if(container[0]){
      container[0].classList.remove("darkmode");
    }
    if(footer[0]){
      footer[0].classList.remove("darkmode");
    }
    localStorage.setItem("isDark", false);
  }
}

