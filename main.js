const spinButton = document.querySelector("#spinButton");
const spinItem = document.querySelector("#spin-item");
console.log(spinButton)
spinButton.addEventListener("click", (e) => {
  console.log(e)
  spinItem.classList.add('spin-item')
});
const vanishButton = document.querySelector("#vanishButton");
const vanishingItem = document.querySelector("#vanish-item");
console.log(vanishButton)
vanishButton.addEventListener("click", (e) => {
  console.log(e)
  vanishingItem.classList.add('vanish-item')
});
const growButton = document.querySelector("#growButton");
const scaleItem = document.querySelector("#scale-item");
  console.log(growButton)
  growButton.addEventListener("click", (e) => {
    console.log(e)
    scaleItem.classList.add('scale-item')
  });