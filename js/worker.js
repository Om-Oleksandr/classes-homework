class Worker {
  constructor(lastName, oneDaySalary, workedDays = 0) {
    // if (typeof lastName !== "string") {
    //   throw new TypeError("lastName must be a string");
    // }
    // if (typeof oneDaySalary !== "number") {
    //   throw new TypeError("Day salary must be a number");
    // }
    // if (oneDaySalary <= 10 || oneDaySalary > 200) {
    //   throw new RangeError("One day salary must be in range [10-200)");
    // }
    // if (workedDays < 0) {
    //   throw new RangeError("Worked days must be greater than zero");
    // }
    this.lastName = lastName;
    this.oneDaySalary = oneDaySalary;
    this.workedDays = workedDays;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string") {
      throw new TypeError("lastName must be a string");
    }
    this._lastName = value;
  }
  get oneDaySalary() {
    return this._oneDaySalary;
  }
  set oneDaySalary(value) {
    if (typeof value !== "number") {
      throw new TypeError("Day salary must be a number");
    }
    if (value <= 10 || value > 200) {
      throw new RangeError("One day salary must be in range [10-200)");
    }
    this._oneDaySalary = value;
  }

  get workedDays() {
    return this._workedDays;
  }
  set workedDays(value) {
    if (typeof value !== "number") {
      throw new TypeError("Worked days must be a number");
    }
    if (value < 0) {
      throw new RangeError("Worked days must be greater than zero");
    }
    this._workedDays = value;
  }
  getSalary() {
    return this._oneDaySalary * this._workedDays;
  }
}
