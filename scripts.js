const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


const car = new Car(50, 50, 30, 50);

function animate() {
car.update();
canvas.height = window.innerHeight;
car.draw(ctx);
requestAnimationFrame(animate);
}

animate();
