export class Point {
    x: number;
    y: number;

    constructor(obj?: any) {
        if (obj) {
            this.x = obj.x ? obj.x : 0;
            this.y = obj.y ? obj.y : 0;
        } else {
            this.x = 0;
            this.y = 0;
        }
    }
}
