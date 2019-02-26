import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  scale(n, in_min, in_max, out_min, out_max) {
    return ((n - in_min) * (out_max - out_min) / (in_max - in_min)) + out_min;
  }

  rng(max): number {
    return Math.floor(Math.random() * max);
  }
}
