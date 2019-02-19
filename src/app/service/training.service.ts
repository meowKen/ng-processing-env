import { Injectable } from '@angular/core';
import { Point } from '../model/point.model';

@Injectable()
export class TrainingService {

  constructor() { }

  trainingSimple(nbPoints: number, width: number, height: number) {
    const points: Array<Point> = [];
    for (let i = 0; i < nbPoints; i++) {
      points.push(new Point(width, height));
    }
    console.log(points);
    return points;
  }

}
