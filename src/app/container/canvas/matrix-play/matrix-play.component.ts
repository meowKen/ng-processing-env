import { Component, OnInit } from '@angular/core';
import { Matrix } from '../../../model/matrix.model';
import { TestingCompilerFactory } from '@angular/core/testing/src/test_compiler';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-matrix-play',
  templateUrl: './matrix-play.component.html',
  styleUrls: ['./matrix-play.component.scss']
})
export class MatrixPlayComponent implements OnInit {

  private _matrix: Matrix;

  constructor() { }

  ngOnInit() {
    // this._matrix = new Matrix(3, 4);
    // this._matrix.randomize();
    // this._matrix.log();

    const m1 = new Matrix(2, 3);
    m1.randomize();
    m1.log();
    const m2 = new Matrix(3, 2);
    m2.randomize();
    m2.log();
    const m3 = Matrix.product(m1, m2);
    m3.log();
    const m4 = m2.transpose();
    m4.log();
  }

}
