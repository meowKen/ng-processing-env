export class Point {
    x: number;
    y: number;

    constructor(obj?: any) {
        if (obj) {
            this.x = obj.x ? obj.x : 0;
            this.y = obj.y ? obj.y : 0;
        } else {
            this.x = 0;
            this.y = 0;
        }
    }

    dist (b: Point): number {
        const A = new Point({x: this.x, y: this.y});
        const B = b;
        return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
    }
}
