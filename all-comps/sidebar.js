var panel = document.querySelector("#side-panel");
var btn = document.querySelector("#panel-disp-btn");

const ClickHandler = (event) => {
  if(event.target === btn){
    panel.style.display === "block" ;
  }
}

btn.addEventListener("click",ClickHandler)