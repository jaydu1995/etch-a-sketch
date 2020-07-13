function createGrid(number) {
  number = number * number
  for (let i = 0; i < number; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${Math.sqrt(((500*500)/number))}px`;
    div.style.height =`${Math.sqrt(((500*500)/number))}px`;
    container.appendChild(div);
  }
}

function removeGrid() {
  squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.remove();
  })
}

function addListenerToGrid() {
  const boxes = document.querySelectorAll('.square');
  boxes.forEach((box) => {
    box.addEventListener('mouseover', changeColor)
  })
}

function changeColor() {
  if (random === true && !this.style.backgroundColor && !this.classList.contains('color')) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`
    this.style.border = "none";
  } else this.classList.add('color')
}


const container = document.querySelector(".container");
const resetButton = document.querySelector('.reset');
const randomButton = document.querySelector(".random");
let random = false;

createGrid(16);
addListenerToGrid();

resetButton.addEventListener('click', () => {
  let number = prompt("How many boxes fam?")
  removeGrid();
  createGrid(number);
  addListenerToGrid();
});

randomButton.addEventListener('click', () => {
  random = (random === false) ? true : false
  randomButton.classList.toggle('clicked');
});
