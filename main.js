document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.querySelector(".button-1");
  const button2 = document.querySelector(".button-2");

  button1.addEventListener("click", function () {
    button2.style.display = "none";
  });
});