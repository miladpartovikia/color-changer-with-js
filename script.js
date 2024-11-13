const box = document.querySelector("#box");

function updateBox(color) {
  // Change the background color
  box.style.background = color;

  // Change text based on color
  switch (color) {
    case "red":
      box.textContent = "Red";
      break;
    case "green":
      box.textContent = "Green";
      break;
    case "blue":
      box.textContent = "Blue";
      break;
    case "black":
      box.textContent = "Black";
      break;
    default:
      box.textContent = "";
  }
}
