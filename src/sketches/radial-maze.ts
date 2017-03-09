import * as Sketch from '../sketch-context';

const BASE_RADIUS = 5;
const SIDES = 64;
const LINES_PER_SECOND = 60;
const RINGS = 100;

Sketch.create(class extends Sketch.Canvas {
    rings: number[];
    lines: number;
    maxLines: number;

    constructor() {
        super();
        this.container = document.getElementById('container');
    }

    setup() {
        this.strokeStyle = '#363D3D';
        this.rings = [];
        for (let i = 0; i < RINGS; i++) {
            this.rings.push((Math.random() * 0.4) + 0.5);
        }
    }

    draw() {
        // translate canvas so (0, 0) is the center
        this.translate(this.width / 2, this.height / 2);

        // start in the center
        this.beginPath();
        this.moveTo(0, 0);

        // determine how many lines to draw for animation
        this.lines = 0;
        this.maxLines = Math.floor(
            (this.millis / 1000) * LINES_PER_SECOND);

        // draw rings
        for (let i = 0; i < this.rings.length; i++) {
            if (this.lines >= this.maxLines) {
                break;
            }
            this.drawRing(BASE_RADIUS * (i + 1),
                SIDES, this.rings[i]);
        }

        // finish path
        this.stroke();

        // reset to identity matrix
        this.setTransform(1, 0, 0, 1, 0, 0);
    }

    drawRing(radius: number, sides: number, r: number) {
        const anglePerSide = (Math.PI * 2) / sides;
        const sidesToDraw = Math.floor(
            Math.max(r * sides, 2));

        // draw each side of the ring
        for (let i = 0; i < sidesToDraw; i++) {
            if (this.lines >= this.maxLines) {
                break;
            }

            const angle = anglePerSide * i;
            this.lineTo(
                Math.sin(angle) * radius,
                Math.cos(angle) * radius);
            this.lines++;
        }

        // rotate canvas so next ring joins up
        const notDrawn = (sides - sidesToDraw) + 1;
        this.rotate(notDrawn * anglePerSide);
    }
});