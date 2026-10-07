const container = document.querySelector('.container');
const sizeBtn = document.querySelector('#size-btn');

function createGrid(squaresPerSide) {
    container.innerHTML = '';
  
    const squareSize = 960 / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.flexGrow = '1';
        square.style.flexShrink = '1'; 

        square.style.opacity = '0.1';
        square.addEventListener('mouseover', () => {
            
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            
            square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

            let currentOpacity = parseFloat(square.style.opacity);
            if (currentOpacity < 1.0) {
                square.style.opacity = (currentOpacity + 0.1).toString();
            }
        });

        container.appendChild(square);
    }
}
createGrid(16);

sizeBtn.addEventListener('click', () => {
    let newSize = prompt('Enter number of squares per side (Maximum 100):');
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid positive number!');
    } else if (newSize > 100) {
        alert('Number of squares cannot exceed 100!');
    } else {
        createGrid(newSize);
    }
});