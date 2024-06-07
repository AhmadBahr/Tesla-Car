

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create a new Car instance
const car = new Car(50, 50, 30, 50);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    car.draw(ctx);
    requestAnimationFrame(animate);
}

animate();
