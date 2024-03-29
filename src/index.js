import Paddle from "/src/paddle.js";
import InputHandler from "/src/input.js";
let canvas = document.getElementById("gamescreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600); // Clear the whole screen
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop); // When the next frame is ready call the gameloop and we'll give you the timestamp
}

gameLoop();
