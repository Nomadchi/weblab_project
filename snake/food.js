food = { x: 1, y: 1 };

const updateFood = ()=>{
  // 如果游戏已经结束，不再更新食物
  if (gameOver) {
    return;
  }

  if (snakeBody[0].x === food.x && snakeBody[0].y === food.y) {
    let newFoodPosition;
    do {
      newFoodPosition = {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
      };
    } while (snakeBody.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y));

    food.x = newFoodPosition.x;
    food.y = newFoodPosition.y;

    snakeBody.push(snakeBody[snakeBody.length - 1]);
  }
};

const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
};