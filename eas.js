const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const divs = document.getElementsByClassName('grid-item');
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
    console.log(e.target); 
  }); 
}   
    

