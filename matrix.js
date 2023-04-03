function clearScreen() {
  // Clear the console
  console.clear();
}

function randomChar() {
  // Generate a random character from the range of ASCII characters used in the Matrix code
  const min = 33;
  const max = 126;
  const charCode = Math.floor(Math.random() * (max - min + 1)) + min;
  return String.fromCharCode(charCode);
}

function matrixCode(canvas) {
  const ctx = canvas.getContext('2d');
  const charWidth = 10;
  const charHeight = 14;
  const charsPerLine = Math.floor(canvas.width / charWidth);
  const lines = [];

  function addLine() {
    const line = [];
    for (let i = 0; i < charsPerLine; i++) {
      line.push(randomChar());
    }
    lines.push(line);
  }

  function shiftLine(line) {
    const char = randomChar();
    line.shift();
    line.push(char);
  }

  function render() {
    // Clear the canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render the lines
    ctx.fillStyle = '#0f0';
    ctx.font = `${charHeight}px Consolas, monospace`;
    for (let y = 0; y < lines.length; y++) {
      const line = lines[y];
      for (let x = 0; x < line.length; x++) {
        const char = line[x];
        const xPos = x * charWidth;
        const yPos = y * charHeight;
        ctx.fillText(char, xPos, yPos);
      }
    }
  }

  // Initialize the lines
  for (let i = 0; i < canvas.height / charHeight; i++) {
    addLine();
  }

  // Continuously shift and render the lines
  setInterval(() => {
    for (let i = 0; i < lines.length; i++) {
      shiftLine(lines[i]);
    }
    render();
  }, 50);
}

// Call the matrixCode function with the desired width and height
matrixCode(80, 25);