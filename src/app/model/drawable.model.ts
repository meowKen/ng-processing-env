import { Point } from './point';

export class PDrawable {
    _loc: Point;
    _size: Point;
    _shape: string;

    constructor (obj?: any) {
        if (obj) {
            this._loc = obj.loc ? obj.loc : new Point({x: obj.loc.x, y: obj.loc.y});
            this._size = obj.size ? obj.size : new Point({x: obj.size.x, y: obj.size.y});
            this._shape = obj.shape ? obj.shape : 'point';
        } else {
            this._loc = new Point();
            this._size = new Point();
            this._shape = 'point';
        }
    }

    draw(pRef: any) {
        if (pRef) {
            pRef.fill(0);
            pRef.ellipse(this._loc.x, this._loc.y, this._size.x, this._size.y);
        }
    }
}
