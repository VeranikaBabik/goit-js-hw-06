const input = document.querySelector("input");
const dataLength = input.getAttribute("data-length");
input.addEventListener("blur", () => {
  if (input.value.length === Number(dataLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
