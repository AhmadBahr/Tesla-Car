const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9, 3);
const car = new Car(canvas.width / 2, window.innerHeight - 100, 30, 50);

function animate() {
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw(ctx);
  car.update();
  car.draw(ctx);

  requestAnimationFrame(animate);
}

animate();
