import { Injectable } from '@angular/core';
import { Point } from '../model/point.model';

@Injectable()
export class TrainingService {

  constructor() { }

  trainingSimple(nbPoints: number, width?: number, height?: number) {
    const w = width ? width : 0; // constructor Point() checks for width & heiht if true, so if [0] width === false
    const h = height ? height : 0;
    const points: Array<Point> = [];
    for (let i = 0; i < nbPoints; i++) {
      const p = new Point(w, h);
      p.mark(this.f(p.x));
      points.push(p);
    }
    console.log(points);
    return points;
  }

  f(x) {
    // y = Ax + B
    return 1 * x + 0.2;
  }

}
