import { Injectable } from '@angular/core';
import { LineModel } from '../model/line.model';
import { Point } from '../model/point';

@Injectable()
export class MapService {

    /**
     * Point de coordonnée (X_TAILLE_MAX, Y_TAILLE_MAX), represente les valeures MAX en x et y
     * La taille de la zone
     */
    private _len: Point;
    /**
     * Collection dee lignes paralleles à l'axe des X
     */
    private _rxs: Array<LineModel> = [];
    /**
     * Collection dee lignes paralleles à l'axe des Y
     */
    private _rys: Array<LineModel> = [];
    /**
     * collection des routes sous forme dessinable
     * @TODO : make DrawbleLineModel && LineModel
     * @NOUSE
     */
    private _roadsDisplay: Array<LineModel> = [];

    constructor(size: Point) {
        if (size && size.x && size.y) {
            this._len = Object.assign({}, size);
            this.init();
        }
    }

    /**
     * User entry point
     */
    drawMap(depth?: number) {
        // const d = depth ? depth : 20;
        // const l = new LineModel();
        // for (let i = 0; i < d; i++) {
        //     this.addLineHalfDistance();
        // }
    }

    private addLineHalfDistance() {
        if (this._roadsDisplay && this._roadsDisplay.length) {
            const lPrev = this._roadsDisplay[this._roadsDisplay.length - 1];
        }
    }

    /**
     * Dessine les 4 côtés d'un rectangle H*L pour: H = _len.y && L = len.x et point A(0,0)
     * Les côté representent les limites de la zone
     */
    private init() {
        const l1A = new Point({x: 0, y: 0});
        const l1B = new Point({x: this._len.x, y: 0});

        const l2A = new Point({x: 0, y: this._len.y});
        const l2B = new Point({x: this._len.x, y: this._len.y});

        const l3A = new Point({x: 0, y: 0});
        const l3B = new Point({x: 0, y: this._len.y});

        const l4A = new Point({x: this._len.x, y: 0});
        const l4B = new Point({x: this._len.x, y: this._len.y});

        const l1 = new LineModel(l1A, l1B);
        const l2 = new LineModel(l2A, l2B);
        const l3 = new LineModel(l3A, l3B);
        const l4 = new LineModel(l4A, l4B);

        this._rxs.push(l1);
        this._rxs.push(l2);
        this._rys.push(l3);
        this._rys.push(l4);

        const axe = Math.random() * 2 >= 1 ? 'x' : 'y';
        const refStart = this['_r' + axe + 's'][0];
        const aStart = new Point({
            x: refStart.len() / 2,
            y: refStart.A.y
        });
        let crossed = 0;
        this['_r' + axe + 's'].forEach((line) => {
            crossed = line.A.dist(aStart) > crossed ? line.A.len : 0;
        });
        const aEnd = new Point({
            x: aStart.x + 0,
            y: aStart.y
        });
    }

    /**
     * Creation de N routes
     * @param n le nombre de routes
     */
    private build(n: number) {
    }

    get roadsDisplay() {
        return this._roadsDisplay;
    }
}
