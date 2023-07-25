const container = document.getElementById("container");  

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeGrid(16, 16);

const divs = document.getElementsByClassName('grid-item');
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
    console.log(e.target); 
  }); 
}

function createNewGrid() {
  let userInput = prompt('Enter a number to change your grid size: ');
  console.log(Number(userInput));
  if (isNaN(userInput)) {
    alert ('Invalid input. Please enter a number.');
    console.log('is not a number');  
  } else if (userInput > 100) {
    alert ('This value is too high. Please enter a lower value'); 
  } else {
    container.innerHTML = "";
    makeGrid(userInput, userInput);
    const divs = document.getElementsByClassName('grid-item');
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'black';
      });
    }
  }
}  
    

