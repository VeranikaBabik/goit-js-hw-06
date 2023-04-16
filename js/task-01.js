"use strict";
const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);
item.forEach((itemOfCategories) => {
  const heading = itemOfCategories.querySelector("h2");
  const itemOfUl = itemOfCategories.querySelectorAll("li");
  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements ${itemOfUl.length}`);
});
