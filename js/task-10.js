function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const number = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
function createBoxes(amount) {
  amount = number.value;
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.cssText = `width: ${size}px; height: ${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.prepend(box);
  }
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
