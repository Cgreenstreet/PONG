export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;

    this.width = 150;
    this.height = 30;

    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10 // Remember everything is drawn from the top left corner
      // so the largest y value is at the bottom of the screen and the largest x value is at the right of the screen
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    // delta time = how much time has changed since this has been last updated
    if (!deltaTime) return;

    this.position.x += this.speed;
    // setting the left and right bounds for the paddle
    if (this.position.x < 0) this.position.x = 0;

    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
    //console.log(this.position.x + this.width);
    ///////////////////////////////////////////////////////////
  }
}
