const buttonText = document.querySelector(".button_expand__text");
const buttonIcon = document.querySelector(".button_expand__ic");
const brendsFor1120 = document.querySelectorAll(".button_container-for1120");
const brendsFor768 = document.querySelectorAll(".button_container-for768");

function showBrends() {
    if (buttonText.textContent === "Показать все") {
        buttonText.textContent = "Скрыть";
        brendsFor1120.forEach(el => el.style.display = "flex");
        buttonIcon.src = "ic/expand2.png";
    } 
    else {
        buttonText.textContent = "Показать все";
        brendsFor1120.forEach(el => el.style.display = "none");
        buttonIcon.src = "ic/expand.png";
    }

    if (window.innerWidth < 1120) {
        if (buttonText.textContent === "Показать все") {
            brendsFor768.forEach(el => el.style.display = "none");
        } else {
            brendsFor768.forEach(el => el.style.display = "flex");
        }
    }
}

buttonText.addEventListener("click", showBrends);