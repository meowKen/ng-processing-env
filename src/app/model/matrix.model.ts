import { NumberSymbol } from '@angular/common';

export class Matrix {
    rows: number;
    cols: number;
    data: Array<any>;

    /**    M1            M2
     * [a, b, c]       [g, h]       [A, B]
     * [d, e, f]   X   [i, j]   =   [C, D]
     *                 [k, l]
     * A = a * g + b * i + c * k
     * B = a * h + b * j + c * l
     * C = d * g + e * i + f * k
     * D = d * h + e * j + f * l
     * @param A = M1
     * @param B = M2
     */
    static product(A: Matrix, B: Matrix): Matrix {
        if (A.possible(B)) {
            const mat = new Matrix(A.rows, B.cols);
            for (let i = 0; i < mat.rows; i++) {
                for (let j = 0; j < mat.cols; j++) {
                    let prod = 0;
                    for (let k = 0; k < A.cols; k++) {
                        prod += (A.data[i][k] * B.data[k][j]);
                    }
                    mat.data[i][j] = prod;
                }
            }
            return mat;
        }
        return null;
    }

    constructor (rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    randomize(max?: number) {
        const m = max ? max : 15;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const rnd = Math.floor(Math.random() * m);
                this.data[i][j] = rnd;
            }
        }
    }

    add(n: number | Matrix) {
        if (n) {
            if (n instanceof Matrix && n.data) {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] += n.data[i][j];
                    }
                }
            } else {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] += n;
                    }
                }
            }
        }
    }

    multiply(n: any) {
        if (n) {
            if (n instanceof Matrix && n.data) {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] *= n.data[i][j];
                    }
                }
            } else {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] = this.data[i][j] * n;
                    }
                }
            }
        }
    }

    transpose(): Matrix {
        if (this.mTrue()) {
            const mat = new Matrix(this.cols, this.rows);
            for (let i = 0; i < mat.rows; i++) {
                for (let j = 0; j < mat.cols; j++) {
                    mat.data[i][j] = this.data[j][i];
                }
            }
            return mat;
        }
        return null;
    }

    /**
     * Is the matrix true ? Check the true validity of the matrix' arrays
     * @param m (optional), the matrix to check
     * @default the matrix to check is this.matrix
     */
    private mTrue(m?: Matrix) {
        if (m) {
            return m.data && m.data.length && m.data[0] && m.data[0].length ? true : false;
        }
        return this.data && this.data.length && this.data[0] && this.data[0].length ? true : false;
    }

    /**
     * Is the matrix product between m && this.matrix possible ?
     * @param m Entry matrix
     */
    private possible (m: Matrix) {
        if (m) {
            if (this.mTrue() && m.mTrue()) {
                return this.rows === m.cols ? true : false;
            }
        }
        return false;
    }

    log() {
        console.log('[rows: ' + this.rows + ', cols: ' + this.cols + ']');
        console.table(this.data);
    }

}
