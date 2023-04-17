const input = document.querySelector("input");
const text = document.querySelector("#text");
console.log(input.value);
input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
});
