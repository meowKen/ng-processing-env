import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Perceptron } from '../../../model/perceptron.model';
import { TrainingService } from '../../../service/training.service';
import { Point } from '../../../model/point.model';
import * as p5 from 'p5';
import { P } from '@angular/core/src/render3';
import { transition } from '@angular/core/src/animation/dsl';
import { DomSanitizer } from '@angular/platform-browser';

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
  private p5;

  constructor(private trainingService: TrainingService,
              private sanitizer: DomSanitizer) {
    this.perceptron = new Perceptron();
  }

  ngOnInit() {
    this.cw = this.width;
    this.ch = this.height;
    this.trainSet.points = this.trainingService.trainingSimple(200, 800, 800);
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
        p.background(255);
        p.line(0, 0, this.width, this.height);
        p.stroke(0);
        p.strokeWeight(2);
        this.trainSet.points.forEach( (point) => {
          p.fill(point.label === 1 ? 0 : 255);
          p.ellipse(point.x, point.y, 10, 10);
        });
      }
    };

    p.draw = () => {
      if (this.displayMode['continue']) {
        this.toggleNextGen();
      }
    };

    // p.mouseClicked = () => {
    //   this.trainSet.score = 0;
    //   this.trainSet.points.forEach( (point) => {
    //     this.perceptron.train([point.x, point.y], point.label, this.p5);
    //   });
    // };
  }

  toggleNextGen() {
    // As we pass the reference of the canvas to the perceptron model
    // We DO NOT WANT to pass an 'undentified' value
    if (this.p5) {
      if (this.trainSet.score !== this.trainSet.points.length) {
        this.perceptron.resetFlags();
        this.trainSet.points.forEach( (point) => {
          this.trainSet.score = this.perceptron.train([point.x, point.y], point.label, this.p5);
        });
        this.displayTable['Generation'] = this.iteration;
        this.displayTable['Nombre de points de controle'] = this.trainSet.points.length;
        this.displayTable['Score total de la génération'] = this.trainSet.score;
        if (this.trainSet.score === this.trainSet.points.length) {
          this.displayTable['Poids W<small>0</small>'] = this.perceptron.weights[0];
          this.displayTable['Poids W<small>1</small>'] = this.perceptron.weights[1];
        }
        this.iteration++;
      }
      if (this.trainSet.score === -1) {
        console.error('[CANVAS][DRAW] - Error on train result, something might be wrong with the inputs');
        this.trainSet.score = this.trainSet.point.length;
      }
    }
  }

  resetPerceptron() {
    this.perceptron.reset();
    this.trainSet.score = 0;
    this.toggleNextGen();
  }

  innerTrustedHTML(str: string) {
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }

  displayKeys(): Array<string> {
    return Object.keys(this.displayTable);
  }

}
