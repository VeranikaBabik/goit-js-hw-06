const counterValue = document.querySelector("#value");
let counter = 0;
const btnDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);
const btnIncrement = document.querySelector(
  'button[data-action = "increment"]'
);
btnDecrement.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});
btnIncrement.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
