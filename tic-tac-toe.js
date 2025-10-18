// Exercise 1 (already added):
window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board > div');
  squares.forEach((sq) => sq.classList.add('square'));

  // ===== Exercise 2: Add X or O when clicked =====
  let currentPlayer = 'X';                 // Alternate between X and O
  const boardState = Array(9).fill(null);  // Track board (for later exercises too)

  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      // If this square is empty, mark it
      if (boardState[index] === null) {
        square.textContent = currentPlayer;     // Show X or O
        square.classList.add(currentPlayer);    // Style with .X or .O from CSS
        boardState[index] = currentPlayer;      // Record move

        // Switch player for the next click
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
      }
      // If it already has a value, do nothing (prevents overwriting)
    });
  });
});
