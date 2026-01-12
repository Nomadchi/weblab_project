const snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 10 },
  { x: 11, y: 9 },
];

const updateSnake = () => {
  // 如果游戏已经结束，不再更新蛇的位置
  if (gameOver) {
    return;
  }

  snakeBody.pop();

  const newHead = { ...snakeBody[0] };
  const snakeDirection = getInputDirection();

  newHead.x += snakeDirection.x;
  newHead.y += snakeDirection.y;

  // 检查撞墙
  if (newHead.x < 1 || newHead.x > 21 || newHead.y < 1 || newHead.y > 21) {
    gameOver = true;
    return;
  }

  // 检查撞到自己
  for (let segment of snakeBody) {
    if (newHead.x === segment.x && newHead.y === segment.y) {
      gameOver = true;
      return;
    }
  }

  snakeBody.unshift(newHead);
};

const drawSnake = (gameBoard) => {
  for (let i = 0; i < snakeBody.length; i++) {
    const segment = snakeBody[i];
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  }
};