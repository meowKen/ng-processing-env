import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Perceptron } from '../../../model/perceptron.model';
import { TrainingService } from '../../../service/training.service';
import * as p5 from 'p5';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilService } from '../../../service/util.service';
import { Point } from '../../../model/point.model';

@Component({
  selector: 'app-perceptron',
  templateUrl: './perceptron.component.html',
  styleUrls: ['./perceptron.component.scss']
})

export class PerceptronComponent implements OnInit, AfterViewInit {

  @Input() private width;
  @Input() private height;

  private cw;
  private ch;

  perceptron: Perceptron;
  trainSet: any = {};
  iteration = 0;
  displayTable = {};
  displayMode = {};
  xHmi = 0;
  yHmi = 0;
  private p5;

  constructor(private trainingService: TrainingService,
              private sanitizer: DomSanitizer,
              private utils: UtilService) {
    this.perceptron = new Perceptron();
  }

  ngOnInit() {
    this.cw = this.width;
    this.ch = this.height;
    this.trainSet.points = this.trainingService.trainingSimple(200);
    this.trainSet.score = 0;
    this.displayMode['continue'] = false;
  }

  ngAfterViewInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch = (p: any) => {
    p.setup = () => {
      const canvas = p.createCanvas(this.cw, this.ch);
      canvas.parent('my-p5-canvas');
      if (this.trainSet.points) {
        p.translate(this.cw / 2, this.ch / 2);
        p.background(255);
        this.drawPoints();
        this.drawTargetLine();
      }
    };

    p.draw = () => {
      if (this.displayMode['continue']) {
        this.toggleNextGen();
      }
    };
  }

  /**
   * Ask the perceptron model to compute one new generation through training.
   * Then handles perceptron display in the p5 canvas
   * this.displayTable is for html display
  */
  toggleNextGen() {
    // As we pass the reference of the canvas to the perceptron model
    // We DO NOT WANT to pass an 'undentified' value
    if (this.p5) {
      if (this.trainSet.score !== this.trainSet.points.length) {
        this.perceptron.resetFlags();
        this.p5.translate(this.cw / 2, this.ch / 2);
        this.p5.background(255);
        this.drawPoints();
        this.trainSet.points.forEach( (point) => {
          this.trainSet.score = this.perceptron.train([point.x, point.y, 1], point.label);
          this.computeDisplayCoordinate(point);
          this.drawError();
          this.drawGuess();
        });
        this.drawTargetLine();
        this.drawGuessedLine(-this.cw, this.cw);
        this.displayTable['Generation'] = this.iteration;
        this.displayTable['Nombre de points de controle'] = this.trainSet.points.length;
        this.displayTable['Score total de la génération'] = this.trainSet.score;
        if (this.trainSet.score === this.trainSet.points.length) {
          this.displayTable['Poids W<small>0</small>'] = this.perceptron.weights[0];
          this.displayTable['Poids W<small>1</small>'] = this.perceptron.weights[1];
          console.log('### FINISH ### - with ' + this.iteration + 'generations');
        }
        this.iteration++;
        this.logPerceptron();
      }
      if (this.trainSet.score === -1) {
        console.error('[CANVAS][DRAW] - Error on train result, something might be wrong with the inputs');
        this.trainSet.score = this.trainSet.point.length;
      }
    }
  }

  resetPerceptron() {
    console.log('------------ RESETING -------------');
    this.perceptron.reset();
    this.trainSet.score = 0;
    this.iteration = 0;
    this.toggleNextGen();
  }

  innerTrustedHTML(str: string) {
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }

  displayKeys(): Array<string> {
    return Object.keys(this.displayTable);
  }

  computeDisplayCoordinate(point: Point) {
    this.xHmi = this.mapCoord(point.x);
    this.yHmi = this.mapCoord(point.y);
  }

  mapCoord(x: number): number {
    return this.utils.scale(x, -1, 1, -this.cw / 2, this.cw / 2);
  }

  guessY(x: number) {
    const w0 = this.perceptron.weights[0];
    const w1 = this.perceptron.weights[1];
    const w2 = this.perceptron.weights[2];
    return -(w2 / w1) - (w0 / w1) * x;
  }

  drawGuessedLine(x1: number, x2: number) {
    this.p5.stroke(0);
    const y1 = this.guessY(-1);
    const y2 = this.guessY(1);
    this.p5.line(this.mapCoord(-1), this.mapCoord(y1), this.mapCoord(1), this.mapCoord(y2));
    this.p5.noStroke();
  }

  drawPoints() {
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.trainSet.points.forEach( (point) => {
      const X = this.mapCoord(point.x);
      const Y = this.mapCoord(point.y);
      this.p5.fill(point.label === 1 ? 0 : 255);
      this.p5.ellipse(X, Y, 32, 32);
    });
    this.p5.noStroke();
  }

  drawTargetLine() {
    this.p5.stroke(0);
    const x1 = -1;
    const y1 = this.trainingService.f(x1);
    const x2 = 1;
    const y2 = this.trainingService.f(x2);
    this.p5.line(this.mapCoord(x1), this.mapCoord(y1), this.mapCoord(x2), this.mapCoord(y2));
    this.p5.noStroke();
  }

  drawGuess() {
    if (this.perceptron.getGuess === 1) {
      this.p5.fill(0, 0, 255);
    } else {
      this.p5.fill(128, 0, 128);
    }
    this.p5.ellipse(this.xHmi, this.yHmi, 12, 12);
  }

  drawError() {
    if (this.perceptron.error === 0) {
      this.p5.fill(0, 255, 0);
    } else {
      this.p5.fill(255, 0, 0);
    }
    this.p5.ellipse(this.xHmi, this.yHmi, 20, 20);
  }

  logPerceptron() {
    const excentricity = Math.abs(Math.abs(this.perceptron.weights[0]) - Math.abs(this.perceptron.weights[1]));
    console.log('[GENERATION_' + this.iteration + ']');
    console.log(' | w0 ' + this.perceptron.weights[0] + ', w1 ' + this.perceptron.weights[1]);
    console.log(' | weights excentricity ' + excentricity);
    console.log(' | total score ' + this.trainSet.score + ', total points : ' + this.trainSet.points.length);
  }

}
