class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0;
    this.damaged = false;

    this.sensor = new Sensor(this);
    this.controls = new Controls();
  }

  update(roadBoarders) {
    if(!this.damaged){
      this.#move();
      this.polygon = this.#createPolygon();
      this.damaged = this.#assessDamage(roadBoarders);
    }
    this.sensor.update(roadBoarders);
  }

  #assessDamage(roadBoarders){
    for(let i = 0; i < roadBoarders.length; i++){
      if(polysIntersect(this.polygon, roadBoarders[i])){
        return true;
      }
    }
    return false;
  }

  #createPolygon(){
    const points = [];
    const rad = Math.hypot(this.width, this.height) / 2;
    const alpha = Math.atan2(this.width, this.height);
    points.push({
      x: this.x + rad * Math.sin(-this.angle - alpha),
      y: this.y + rad * Math.cos(-this.angle - alpha)
    });
    points.push({
      x: this.x + rad * Math.sin(-this.angle + alpha)* rad,
      y: this.y + rad * Math.cos(-this.angle + alpha)* rad
    });
    points.push({
      x: this.x - rad * Math.sin(Math.PI+this.angle-alpha),
      y: this.y - rad * Math.cos(Math.PI+this.angle-alpha)
    });
    points.push({
      x: this.x - rad * Math.sin(Math.PI+this.angle+alpha),
      y: this.y - rad * Math.cos(Math.PI+this.angle+alpha)
    });
    return points;
  }

  #move() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }

    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.controls.left) {
      this.angle += 0.03;
    }

    if (this.controls.right) {
      this.angle -= 0.03;
    }

    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }

  draw(ctx) {
    if(this.damaged){
      ctx.fillStyle = "blue";
      }else{
      ctx.fillStyle = "red";
      }
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);

    ctx.beginPath();
    ctx.rect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();

    ctx.restore();

    this.sensor.draw(ctx);
  }
}
