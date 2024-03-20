let currentPlayer = 'X';
  let gameActive = true;
  let gameState = ['', '', '', '', '', '', '', '', ''];
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function handleClick(cellIndex) {
    if (gameState[cellIndex] === '' && gameActive) {
      gameState[cellIndex] = currentPlayer;
      document.getElementById('board').children[cellIndex].innerText = currentPlayer;
      if (checkWin()) {
        document.getElementById('message').innerText = `Player "${currentPlayer}" wins!`;
        gameActive = false;
      } else if (checkDraw()) {
        document.getElementById('message').innerText = "It's a draw!";
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  function checkWin() {
    return winningConditions.some(condition => {
      return condition.every(index => {
        return gameState[index] === currentPlayer;
      });
    });
  }

  function checkDraw() {
    return gameState.every(cell => {
      return cell !== '';
    });
  }

  function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('board').querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('message').innerText = '';
  }