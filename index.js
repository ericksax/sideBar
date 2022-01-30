const nave = document.querySelector("nav")
const burguerBtn = document.querySelector(".burguerMenu")


burguerBtn.addEventListener("click", () => {
    nave.classList.toggle("open_menu")
})
