const hamburgur = document.querySelector(".hamburgur");
const navbar = document.querySelector(".navbar-hidden-wrapper");
const closed = document.querySelector("#close");

hamburgur.addEventListener("click", function () {
  navbar.style.left = 0;
});

closed.addEventListener("click", function () {
  navbar.style.left = `-100%`;
});
