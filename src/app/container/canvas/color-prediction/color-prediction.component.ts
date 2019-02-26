import { Component, OnInit, AfterViewInit } from '@angular/core';
import { P5CanvasService } from '../../../service/p5-canvas.service';
import { PDrawable } from '../../../model/drawable.model';
import { Point } from '../../../model/point';
import { UtilService } from '../../../service/util.service';
import { ColorRGB } from '../../../model/color';

@Component({
  selector: 'app-color-prediction',
  templateUrl: './color-prediction.component.html',
  styleUrls: ['./color-prediction.component.scss']
})
export class ColorPredictionComponent implements OnInit, AfterViewInit {

  private _parent = 'color-prediction-p5-canvas';
  private _pRef: any;

  /**
   * DOM Input values
   */
  private _userLocation: Point;

  constructor(private canvasService: P5CanvasService,
              private util: UtilService) {
    this._userLocation = new Point({x: 400, y: 400});
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._pRef = this.canvasService.generate({
      size: { x: 800, y: 800 },
      parent: this._parent,
      bgColor: { r: 18, g: 208, b: 18 }
    });
  }

  addDrawable() {
    this.canvasService.addDrawable(
      new PDrawable({
        loc: new Point({x: this._userLocation.x, y: this._userLocation.y}),
        size: new Point({x: 40, y: 40}),
        shape: 'point',
      })
    );
  }

  updateLoc(event, card) {
    this._userLocation[card] = Math.floor(parseFloat(event.value));
    console.log(event);
    console.log(this._userLocation);
  }

  updateColor() {
    const r = this.util.rng(255);
    const g = this.util.rng(255);
    const b = this.util.rng(255);
    this.canvasService.bgColor(new ColorRGB({r: r, g: g, b: b}));
  }

  public get userLocation(): Point {
    return this._userLocation;
  }
  public set userLocation(value: Point) {
    this._userLocation = value;
  }

}
