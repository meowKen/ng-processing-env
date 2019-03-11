import { Point } from './point';
import * as p5 from 'p5';

export class LineModel {
    A: Point;
    B: Point;

    constructor (start?: Point, end?: Point) {
        if (start && end) {
            this.A = new Point({x: start.x, y: start.y});
            this.B = new Point({x: end.x, y: end.y});
        } else {
            this.A = new Point();
            this.B = new Point();
        }
    }

    draw (pRef: any) {
        if (pRef && pRef instanceof p5) {
            pRef.fill(0);
            pRef.strokeWeight(20);
            pRef.line(this.A.x, this.A.y, this.B.x, this.B.y);
        }
    }

    len() {
        const A = this.A;
        const B = this.B;
        return A.dist(B);
    }
}
