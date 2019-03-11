import { Point } from './point';
import { ColorRGB } from './color';

export class PDrawable {
    loc: Point;
    size: Point;
    shape: string;
    color: ColorRGB;

    constructor (obj?: any) {
        if (obj) {
            this.loc = obj.loc ? obj.loc : new Point({x: obj.loc.x, y: obj.loc.y});
            this.size = obj.size ? obj.size : new Point({x: obj.size.x, y: obj.size.y});
            this.shape = obj.shape ? obj.shape : 'point';
            this.color = new ColorRGB({r: 128, g: 128, b: 128});
        } else {
            this.loc = new Point();
            this.size = new Point();
            this.shape = 'point';
            this.color = new ColorRGB({r: 128, g: 128, b: 128});
        }
    }

    draw(pRef: any) {
        if (pRef) {
            pRef.fill(this.color.r, this.color.g, this.color.b);
            switch (this.shape) {
                default:
                    break;
                case 'point':
                    pRef.ellipse(this.loc.x, this.loc.y, this.size.x, this.size.y);
                    break;
                case 'square':
                    pRef.rect(this.loc.x, this.loc.y, this.size.x, this.size.y);
            }
        }
    }
}
