const input = document.querySelector("input");
input.addEventListener("input", () => {
  document.body.style.backgroundColor = input.value;
});
