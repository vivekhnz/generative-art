import * as Sketch from '../sketch-context';

Sketch.create(class extends Sketch.Canvas {
    container = document.getElementById('container');

    draw() {
        this.fillStyle = '#363D3D';
        this.beginPath();
        this.arc(this.width / 2, this.height / 2, 10, 0, Math.PI * 2, true);
        this.closePath();
        this.fill();
    }
});