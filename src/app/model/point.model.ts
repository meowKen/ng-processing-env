export class Point {
    x: number;
    y: number;
    label: number;

    /**
     * @param width
     * @param height
     */
    constructor(width?: number, height?: number) {
        // deadly ternaire of death
        this.x = width ? (Math.random() * (width - (-width)) + (-width)) : (Math.random() * (1 - (-1)) + (-1));
        this.y = height ? (Math.random() * (height - (-height)) + (-height)) : (Math.random() * (1 - (-1)) + (-1));
    }

    mark(lineY: number) {
        this.label = (lineY > this.y) ? 1 : -1;
    }


}
