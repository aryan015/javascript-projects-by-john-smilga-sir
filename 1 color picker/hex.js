const color_digits = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const btn = document.querySelector("button");
const color_id = document.getElementById("color-id");

console.log(color_id);

btn.addEventListener("click", function () {
  let random_Number = "#";
  for (let i = 1; i <= 6; i++) {
    random_Number += color_digits[randomNumber()];
  }
  console.log(random_Number);
  document.body.style.backgroundColor = random_Number;
  color_id.textContent = random_Number;
});

function randomNumber() {
  return Math.floor(Math.random() * 16);
}

// // console.log(color_digits.length);
// const btn = document.querySelector("button");
// const color_id = document.getElementById("color-id");

// btn.addEventListener("click", function () {

//   let hex_color = "#";
//   for (let i = 1; i <= 6; i++) {
//         let random_number = randomNumber();
//         console.log(random_number);
//         hex_color += color_digits[random_number];
//   }

//   document.body.style.backgroundColor = hex_color;
//   color_id.textContent = hex_color;
// });

// function randomNumber() {
//   return Math.floor(Math.random() * color_digits.length );
// }

// // let num1 = 1.232;
// // console.log(Math.floor(Math.random()*10 + 1));
