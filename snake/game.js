const SNAKE_SPEED = 5;

const gameBoard = document.getElementById('game-board');

let gameOver = false;

const main = () => {
  if (gameOver) {
    clearInterval(gameLoop);
    alert('游戏结束！');
    restartGame();
    return;
  }
  update();
  draw();
};

let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
  updateSnake();
  updateFood();
};

const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

const restartGame = () => {

  gameOver = false;

  snakeBody.length = 0;
  snakeBody.push({ x: 11, y: 11 });
  snakeBody.push({ x: 11, y: 10 });
  snakeBody.push({ x: 11, y: 9 });

  inputDirection = { x: 0, y: 1 };

  food.x = 1;
  food.y = 1;

  gameLoop = setInterval(main, 1000 / SNAKE_SPEED);
};