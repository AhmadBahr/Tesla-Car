const carCanvas = document.getElementById('carCanvas');
carCanvas.width = 200;

const networkCanvas = document.getElementById('networkCanvas');
networkCanvas.width = 300;

const carctx = carCanvas.getContext("2d");
const networkctx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9, 4);
const carCanvas = new Car(road.getLaneCenter(1.5), 100, 30, 50,"AI")

const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50,"DUMMY",2),
];

animate();

function animate() {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders,[]);
    }
    carCanvas.update(road.borders,traffic);
    carCanvas.height = window.innerHeight;

    carctx.save();
    carctx.translate(0, -carCanvas.y + carCanvas.height * 0.7);

    road.draw(carctx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carctx);
    }
    carCanvas.draw(carctx);

    carctx.restore();
    requestAnimationFrame(animate);
}
