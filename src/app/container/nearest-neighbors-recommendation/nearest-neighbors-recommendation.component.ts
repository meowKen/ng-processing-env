import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-nearest-neighbors-recommendation',
  templateUrl: './nearest-neighbors-recommendation.component.html',
  styleUrls: ['./nearest-neighbors-recommendation.component.scss']
})
export class NearestNeighborsRecommendationComponent implements OnInit, AfterViewInit {

  private p5;

  @ViewChild('mainFrame')
  private _frameSelector: ElementRef;
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    p.setup = () => {
      const canvas = p.createCanvas(700, 600);
      canvas.parent('myFrame');
    };

    p.draw = () => {
      p.background(255, 15, 15);
      p.fill(0);
      p.rect(p.width / 2, p.height / 2, 50, 50);
    };
  }

}
