export class Point {
    x: number;
    y: number;
    label: number;

    constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // this.label = this.x > this.y ? 1 : -1;
        if (this.x > this.y) {
            this.label = 1;
        } else {
            this.label = -1;
        }
    }
}
