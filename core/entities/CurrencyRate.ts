export class CurrencyRate {
    _rate: number;
    _value: number;

    constructor (rate: number, value: number) {
        if (isEmptyOrNull(rate) || isEmptyOrNull(value)) {
            throw new Error("Rate or Value Should not be null");
        }
        this._rate = rate;
        this._value = value;
    }

    get result () {
        return this._rate * this._value;
    }
    
}

function isEmptyOrNull  (num: number) {
    return num === null
}