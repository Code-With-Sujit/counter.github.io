const mainTitle = document.querySelector("#title");

let counter = 0;
function decrement() {
  counter--;
  mainTitle.textContent = counter;
}
function reset() {
  counter=0;
  mainTitle.textContent = counter;
}
function increment() {
  counter++;
  mainTitle.textContent = counter;
}
