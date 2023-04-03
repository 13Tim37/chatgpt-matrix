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

async function matrixCode(width, height) {
  // Continuously generate and display new frames of Matrix code
  while (true) {
    clearScreen();
    for (let y = 0; y < height; y++) {
      let line = '';
      for (let x = 0; x < width; x++) {
        line += randomChar();
      }
      console.log(line);
    }
    // Pause briefly before displaying the next frame
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Call the matrixCode function with the desired width and height
matrixCode(80, 25);