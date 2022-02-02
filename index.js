const nave = document.querySelector("nav");
const burguerBtn = document.querySelector(".burguerMenu");
let boxSearch = document.querySelector("#boxSearch");
let input = document.querySelector("#input");

// boxSearch.addEventListener("click", () => {
//   let openMenu = document.querySelector(".open_menu");
//   if (openMenu) {
//     input.classList.add("search");
//   }

//   console.log(input, openMenu);
// });

burguerBtn.addEventListener("click", () => {
  //   input.classList.remove("search");

  input.classList.add("search");
  nave.classList.toggle("open_menu");
});
