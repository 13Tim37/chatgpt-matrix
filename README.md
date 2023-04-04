# Matrix Code Animation

This is a simple JavaScript animation that displays the Matrix code effect, with lines of seemingly random letters, numbers, and symbols falling vertically down a black background. The characters are in a small font size and tightly spaced together, giving the appearance of a dense stream of information. The characters move down the screen in a fluid, wave-like motion, creating the impression of a constantly flowing and evolving data stream.

## Description of the Code

The following steps are performed in the code:

- The canvas element and its context are obtained from the DOM.
- The canvas size is set to match the window size and is updated when the window is resized.
- The size of the characters and the spacing between them are defined.
- The number of characters that can fit on a line is calculated.
- A grid is created to hold the characters and is filled with empty spaces.
- A function to update the grid is defined. It adds new characters to the top row and shifts all the rows down by one.
- A function to render the grid is defined. It clears the canvas, renders the characters in green color and uses the Consolas, monospace font. The characters are rendered at their corresponding position on the canvas.
- An animation loop is started which updates and renders the grid every 50 milliseconds.

This creates a scrolling effect of randomly generated characters falling from the top to the bottom of the canvas.

## Installation

Clone the repository, navigate to the directory in your terminal, and run the following command to install the necessary dependencies:


```bash
npm install
```

## Usage

To start the animation, run the following command in your terminal:

```bash
npm start
```
The animation will start running and can be stopped by closing the window or stopping the process in your terminal.

## Customization

The animation can be customized by changing the values of the following variables in the main.js file:

  - charWidth - The width of each character in pixels
  - charHeight - The height of each character in pixels
  - spacing - The spacing between each character in pixels

## License

This project is licensed under the MIT License. See the LICENSE file for more information.