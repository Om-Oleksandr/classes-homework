class RangeValidator {
  constructor(from = 1, to = 10) {
    if (from > to) {
      this.from = to;
      this.to = from;
    } else {
      this.from = from;
      this.to = to;
    }
  }
  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("From must be number");
    }
    this._from = value;
  }
  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("To must be number");
    }
    this._to = value;
  }
  getRange() {
    const rangeArray = new Array();
    rangeArray.push(this.from, this.to);
    return rangeArray;
  }
  isValid(value) {
    return value > this.from && value < this.to ? true : false;
  }
}
try {
  const number = new RangeValidator(30, 15);
  console.log(number);
  console.log(number.getRange());
  console.log(number.isValid(30));
} catch (error) {
  console.log(error);
}
