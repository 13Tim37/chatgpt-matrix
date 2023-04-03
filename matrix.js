const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the size of the canvas to match the window size
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the size of the characters and the spacing between them
const charWidth = 24;
const charHeight = 24;
const spacing = 5;

// Calculate the number of characters that can fit on a line
const charsPerLine = Math.floor(canvas.width / (charWidth + spacing));

// Define the grid to hold the characters
const grid = [];

// Fill the grid with empty spaces
for (let y = 0; y < canvas.height / (charHeight + spacing); y++) {
  grid.push([]);
  for (let x = 0; x < charsPerLine; x++) {
    grid[y].push('');
  }
}

// Define the function to update the grid
function updateGrid() {
  // Add new characters to the top row
  for (let x = 0; x < charsPerLine; x++) {
    if (Math.random() > 0.98) {
      const lineLength = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
      let line = '';
      for (let i = 0; i < lineLength; i++) {
        line += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);
      }
      grid[0][x] = line;
    }
  }

  // Shift all the rows down by one
  for (let y = grid.length - 1; y >= 0; y--) {
    for (let x = 0; x < charsPerLine; x++) {
      if (y === 0) {
        grid[y][x] = '';
      } else {
        grid[y][x] = grid[y - 1][x];
      }
    }
  }
}

// Define the function to render the grid
function renderGrid() {
  // Clear the canvas
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Render the grid
  ctx.fillStyle = '#0f0';
  ctx.font = `${charHeight}px Consolas, monospace`;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < charsPerLine; x++) {
      const line = grid[y][x];
      const xPos = x * (charWidth + spacing);
      const lineLength = line.length;
      for (let i = 0; i < lineLength; i++) {
        const char = line.charAt(i);
        const yPos = (y - (lineLength - i - 1)) * (charHeight + spacing);
        ctx.fillText(char, xPos, yPos);
      }
    }
  }
}

// Start the animation loop
function animate() {
  updateGrid();
  renderGrid();
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 50);
}

animate();