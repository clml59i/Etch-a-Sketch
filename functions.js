const containerDiv = document.querySelector('.container');
const resetButton = document.querySelector('#resetButton');
const changeGridButton = document.querySelector('#changeSize');

createGrid(16,16);
draw();

resetButton.addEventListener("click", reset)
changeGridButton.addEventListener("click", function(){
    const gridSizeValue = document.querySelector('#gridSize').value;
    if(!(isNaN(gridSizeValue)) && gridSizeValue != undefined){
        // Remove the content of the grid before creating the new one
        containerDiv.innerHTML='';
        // Create the grid with the new values
        createGrid(gridSizeValue, gridSizeValue);
        draw();
    }
})


function createGrid(rows, columns){
    // Change the size of the grid according to the parameters
    document.documentElement.style.setProperty("--grid-rows", rows);
    document.documentElement.style.setProperty("--grid-columns", columns);

    for (i = 0; i < (rows*columns); i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add("grid-element");
        containerDiv.appendChild(gridElement);
    }
}

function draw(){
    const gridSquares = document.querySelectorAll(".grid-element");
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover", function(){
            gridSquare.classList.add("draw");
        })
    })
}

function reset(){
    const gridSquares = document.querySelectorAll(".grid-element");
    gridSquares.forEach(gridSquare => {
        gridSquare.classList.remove("draw");
    });
    
    
}