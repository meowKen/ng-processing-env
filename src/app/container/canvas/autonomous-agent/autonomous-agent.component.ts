import { Component, OnInit, AfterViewInit } from '@angular/core';
import { P5CanvasService } from '../../../service/p5-canvas.service';
import { Point } from '../../../model/point';
import { PDrawable } from '../../../model/drawable.model';
import { UtilService } from '../../../service/util.service';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-autonomous-agent',
  templateUrl: './autonomous-agent.component.html',
  styleUrls: ['./autonomous-agent.component.scss']
})
export class AutonomousAgentComponent implements OnInit, AfterViewInit {

  private _pRef = {};
  private _parent = 'color-prediction-p5-canvas-2';
  private _selected: PDrawable;

  /**
   * DOM Input values
   */
  private _userLocation: Point;

  constructor(private canvasService: P5CanvasService,
              private util: UtilService) {
    this._userLocation = new Point({x: 400, y: 400});
  }

  ngOnInit() {
    this._selected = new PDrawable({
      loc: new Point({x: this._userLocation.x, y: this._userLocation.y}),
      size: new Point({x: 40, y: 40}),
      shape: 'point',
    });
  }

  ngAfterViewInit(): void {
    this._pRef = this.canvasService.generate({
      size: { x: 800, y: 800 },
      parent: this._parent,
      bgColor: { r: 18, g: 208, b: 18 }
    });
    const selector = document.getElementById('color-prediction-p5-canvas-2');
    selector.addEventListener('mousemove', (event) => {this.handleMouseMove(event); }, false);
    selector.addEventListener('mousedown', () => {this.handleMouseClick(); }, false);
  }

  private handleMouseMove(evt) {
    if (this._selected) {
      const nextX = evt.offsetX;
      const nextY = evt.offsetY;
      this._selected.loc = new Point({x: nextX, y: nextY});
      this.canvasService.refreshAll();
      this.canvasService.displayItem(this._selected);
    }
  }

  private handleMouseClick() {
    if (this._selected) {
      console.log('click');
      this.canvasService.addDrawable(this._selected);
    }
  }

  addDrawable() {
    const x = this._userLocation.x;
    const y = this._userLocation.y;
    this.canvasService.addDrawable(this._selected);
  }
  public get pRef() {
    return this._pRef;
  }
  public set pRef(value) {
    this._pRef = value;
  }
  public get userLocation(): Point {
    return this._userLocation;
  }
  public set userLocation(value: Point) {
    this._userLocation = value;
  }

}
