const button = document.querySelector(".button_expand__text");

button.addEventListener("click", function (){
    button.textContent = button.textContent === "Показать все" ? "Скрыть" : "Показать все";
    
})

console.log("hi");