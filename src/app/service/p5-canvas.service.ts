import { Injectable } from '@angular/core';
import * as p5 from 'p5';
import { Point } from '../model/point';
import { ColorRGB } from '../model/color';
import { PDrawable } from '../model/drawable.model';

@Injectable()
export class P5CanvasService {

  /**
 * The default param
 */
  private _defParam: any = {
    size : {
      x: 400,
      y: 400
    },
    parent: null,
    bgColor: {
      r: 18,
      g: 18,
      b: 18
    }
  };
  private _canvas;
  private _p5Ref: any;
  private _size: Point;
  private _parent: string; // #TODO be careful, @security
  private _bgColor: ColorRGB;
  private _drawables: Array<PDrawable> = [];

  constructor() { }

  /**
   * User entry point
   * @param param {_size, _parent, _bgColor} => associative table containing the init. parameters. If not, set default
   * @size : this desired size of the canvas, if not resolve to default 400px * 400px
   * @parent : the parent DOM element. P5 canvas is stored in an html ... <canvas></canvas>
   * @bgColor : the background color, default (18, 18, 18)
   * #TODO: Try to keep unique // the lowest possible number of entry points
   */
  generate(param?: any) {
    // Setting the parameters, trying to be careful w/ nullity
    if (param) {
      this.setParam(param);
    } else {
      this.setParam(this._defParam);
    }
    this.createCanvas(); // #TODO: to surround w/ try catch
    return this._p5Ref;
  }

  private setParam(param) {
    if (param) {
      this._size = param.size ? param.size : new Point({x: 400, y: 400});
      this._parent = param.parent ? param.parent : null;
      this._bgColor = param.bgColor ? param.bgColor : new ColorRGB({r: 18, g: 18, b: 18});
    }
  }

  // TODO remove
  bgColor(col: ColorRGB) {
    if (col) {
      this._p5Ref.background(col.r, col.g, col.b);
      this.drawAll();
    }
  }

  addDrawable(obj: PDrawable) {
    this._drawables.push(obj);
    this.drawAll();
  }

  private drawAll() {
    if (this._p5Ref && this._drawables && this._drawables.length) {
      this._drawables.forEach( (mesh) => {
        mesh.draw(this._p5Ref);
      });
    }
  }

  private createCanvas() {
    this._p5Ref = new p5(this.sketch);
  }

  /**
   * @info no definition draw function;
   */
  private sketch = (p: any) => {
    p.setup = () => {
      const canvas = p.createCanvas(this._size.x, this._size.y);
      if (this._parent) {
        canvas.parent(this._parent);
      }
      if (this._bgColor) {
        canvas.background(this._bgColor.r, this._bgColor.g, this._bgColor.b);
      }
    };
  }

  public get size(): Point {
    return this._size;
  }
  public set size(value: Point) {
    this._size = value;
  }
  public get p5Ref(): any {
    return this._p5Ref;
  }
}
