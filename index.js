class RangeValidator {
    constructor(from, to) {
        this.isValidNum(from)
        this.isValidNum(to)
        this.isValidRange(from, to)
        this._from = from
        this._to = to
    }

    isValidNum(val) {
        if (typeof val !== "number") {
            throw new Error('param must be a number')
        }
    }

    isValidRange(from, to) {
        if (from >= to) {
            throw new Error('The parameter from must be less than the parameter to.')
        }
    }

    get from() {
        return this._from;
    }

    set from(num) {
        this.isValidNum(num);
        this.isValidRange(num, this._to);
        this._from = num;
    }

    get to() {
        return this._to;
    }

    set to(num) {
        this.isValidNum(num);
        this.isValidRange(this._from, num);
        this._to = num;
    }

    get fullRange() {
        let num = this._from;
        let arr = [];
        while (num <= this._to) {
            arr.push(num);
            num++;
        }
        return arr;
    }

    get range() {
        return [this.from, this.to];
    }

    validate(num) {
        return num >= this._from && num <= this._to;
    }
}