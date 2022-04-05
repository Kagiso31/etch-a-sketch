let currentGridSize = 0;
const body = document.querySelector('body');

const container = document.createElement('div');
container.className = "container";
body.appendChild(container);

// Grid
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.style.width = (container.clientWidth / gridSize) + "px";
            cell.style.height = (container.clientHeight / gridSize) + "px";
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = "pink";
            });
            container.append(cell);
        } 
    }
    currentGridSize = gridSize;
}

function clearGrid() {
    container.innerHTML = '';
}

window.onload = () => {
    createGrid(16);
}