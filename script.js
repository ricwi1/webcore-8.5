const button = document.querySelector(".button_expand__text");
const buttonIcon = document.querySelector(".button_expand__ic");
const brendsFor1120 = document.querySelectorAll(".button_container-for1120");
const brendsFor768 = document.querySelectorAll(".button_container-for768");

button.addEventListener("click", function () {
    if (button.textContent === "Показать все") {
        button.textContent = "Скрыть";
        brendsFor1120.forEach(el => el.style.display = "flex");
        buttonIcon.src = "ic/expand2.png";
    } else {
        button.textContent = "Показать все";
        brendsFor1120.forEach(el => el.style.display = "none");
        buttonIcon.src = "ic/expand.png";
    }
   if (window.innerWidth < 1120) {
    if (button.textContent === "Показать все") {
        brendsFor768.forEach(el => el.style.display = "none");
    } else {
        brendsFor768.forEach(el => el.style.display = "flex");
    }
   }
});


console.log("hi");