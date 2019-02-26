export class ColorRGB {
    r: number;
    g: number;
    b: number;

    constructor(obj?: any) {
        if (!obj) {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        } else {
            this.r = obj.r ? obj.r : 0;
            this.g = obj.g ? obj.g : 0;
            this.b = obj.b ? obj.b : 0;
        }
    }

    changeTo(obj?: any) {
        if (obj) {
            this.r = obj.r ? obj.r : 0;
            this.g = obj.g ? obj.g : 0;
            this.b = obj.b ? obj.b : 0;
        }
    }
}
