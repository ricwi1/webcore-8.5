const mainBlock = document.querySelector("main");
const button = document.querySelector(".button_expand__text");
const brends = document.querySelector(".for1120");

button.addEventListener("click", function (){
    button.textContent = button.textContent === "Показать все" ? "Скрыть" : "Показать все";
    if(button.textContent === "Показать все" ){
        brends.style.display = "none";
        mainBlock.style.height = "250px";
    }else{
        brends.style.display = "flex";
        mainBlock.style.height = "350px";
    }
})

console.log("hi");