import { Component, OnInit, AfterViewInit } from '@angular/core';
import { P5CanvasService } from '../../../service/p5-canvas.service';
import { MapService } from '../../../service/map.service';
import { Point } from '../../../model/point';

@Component({
  selector: 'app-map-generator',
  templateUrl: './map-generator.component.html',
  styleUrls: ['./map-generator.component.scss']
})
export class MapGeneratorComponent implements OnInit, AfterViewInit {

  private _canvas: any = {};

  constructor(private canvasService: P5CanvasService,
              private mapService: MapService) {
    this.mapService = new MapService(new Point({x: 800, y: 800}));
    }

  ngOnInit() {
    this._canvas = this.canvasService.generate();
  }

  ngAfterViewInit() {

  }

  get canvas(): any {
    return this._canvas;
  }

}
