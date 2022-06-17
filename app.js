const checkbox = document.querySelector(".ingredient-list__item");

function backgroundColor() {
    checkbox.classList.toggle("beforeColor")
}


checkbox.addEventListener("click", backgroundColor);