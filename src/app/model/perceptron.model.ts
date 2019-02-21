/**
 * Represents a simple perceptron
 * @PROPERTY weights: an array of weights to multiply the input values with
 * @PROPERTY learningRate: a number < to 1, multiply the error score to tweek the steering power
 * @PROPERTY totalScore: reset to 0 ON EACH generation, the sum of correct.
 * @PROPERTY error: the current guess state of error
 * Simple reference to the 'total correctness' of guesses regarding to the training set
 */
export class Perceptron {
    private _weights: Array<number>;
    private _learningRate: number;
    private _totalScore: number;
    private _error: number;
    private _guess: number;

    /**
     * Should be able to initialize the perceptron with :
     * @CASE1 weights given - no length given (nor needed) => simply paste the given array in this.weight
     * @CASE2 no weights given - length given => generate length random weight [-1, 1]
     * @CASEDEFAULT no weights - no length => generate 2 random weights [-1, 1]
     */
    constructor(weights?, length?) {
        this._weights = weights ? weights : [];
        if (! weights) {
            const len = length ? length : 3;
            for (let i = 0; i < len; i++) {
                this._weights.push(Math.random() * (1 + 1) - 1);
            }
        }
        this._learningRate = 0.01;
    }

    /**
     * Resets the total score
     */
    resetFlags() {
        this._totalScore = 0;
    }

    /**
     * Resets the perceptron and its 'knowledge'
     * @param length new length / @OPTIONAL
     */
    reset(length?) {
        const len = length ? length : 3;
        for (let i = 0; i < len; i++) {
            this._weights[i] = Math.random() * (1 + 1) - 1;
        }
        this.resetFlags();
    }

    /**
     * Should train the perceptron to find the optimal weights to make a better guess
     * @PARAM inputs: the total inputs of the perceptron, guess material
     * @PARAM target: the result known from the training dataset
     * @PARAM p5: reference to an instance of p5js canvas
    */
    train(inputs: Array<number>, target: number) {
        try {
            this._guess = this.guess(inputs);
            this._error = target - this._guess;
            if (this._error === 0) {
                this._totalScore ++;
            }
            for (let i = 0; i < this._weights.length; i++) {
                this._weights[i] += ((this._error * inputs[i]) * this._learningRate);
            }
            return this._totalScore;
        } catch (ex) {
            console.error('[PERCEPTRON][TRAIN] - Excpetion à this.guess(inputs). Verifiez les entrées');
            console.error(ex);
            return -1;
        }
    }

    /**
     * Compute the sum of (input * its weight) and pass it through the activation function
     * @param inputs A list of number
     */
    private guess(inputs: Array<number>) {
        if (this._weights && inputs && this._weights.length && inputs.length && inputs.length === this._weights.length) {
            let output = 0;
            for (let i = 0; i < this._weights.length; i++) {
                output += inputs[i] * this._weights[i];
            }

            return this.sign(output);
        }
        console.error('[PERCEPTRON][GUESS] - Les entrée ou les poids du perceptron ne correspondent pas aux valeures attendue');
        console.error('[PERCEPTRON][GUESS] - weights.length ' + this._weights.length + ', inputs.length ' + inputs.length);
        return null;
    }

    /**
     * @ActivationFunction Returns a 'sign', [1] or [-1], based on the output sign sign.
     * The sign can be seen as the 'direction' in which we want to tweek the weights
     * @param guess The guessed output of the perceptron
     */
    private sign(guess) {
        return guess == null ? null :
            guess >= 0 ? 1 :
                -1;
    }

    public get weights(): Array<number> {
        return this._weights;
    }

    public get learningRate(): number {
        return this._learningRate;
    }

    public get totalScore(): number {
        return this._totalScore;
    }

    public get error(): number {
        return this._error;
    }

    public get getGuess(): number {
        return this._guess;
    }
}
