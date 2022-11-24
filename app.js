const checkboxArr = document.querySelectorAll(".ingredient-list__item");

console.log(checkboxArr)

checkboxArr.forEach((box) => box.addEventListener("click", backgroundColor) )


function backgroundColor() {
    this.classList.toggle("beforeColor")
}

