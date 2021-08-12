const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("button");
const color_id = document.getElementById("color-id");

console.log(btn);

btn.addEventListener("click", function () {
  let random_Number = randomNumber();
  console.log(random_Number);
  document.body.style.backgroundColor = colors[random_Number];
});

function randomNumber() {
  return Math.floor(Math.random() * 4);
}

// const btn = document.querySelector("button");
// const color_id = document.getElementById("color-id");
// console.log(color_id);

// btn.addEventListener("click", function () {
//   console.log('triggered');
//   let random_number = randomNumber();
//   document.body.style.backgroundColor = colors[random_number];
//   color_id.textContent = colors[random_number];
//   console.log(random_number);
// });

// function randomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }

// let num1 = 1.232;
// console.log(Math.floor(Math.random()*10 + 1));
