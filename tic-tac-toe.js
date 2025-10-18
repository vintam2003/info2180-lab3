
window.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('#board > div');
  squares.forEach((sq) => sq.classList.add('square'));

  // Exercise 2: X/O click handling with simple turn alternation
  let currentPlayer = 'X';
  const boardState = Array(9).fill(null);

  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      if (boardState[index] === null) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        boardState[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  });

  // Exercise 3: Hover effect
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => square.classList.add('hover'));
    square.addEventListener('mouseout', () => square.classList.remove('hover'));
  });
});

