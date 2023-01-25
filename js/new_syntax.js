"use strict";
class UserClass {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  toString() {
    return this.firstName;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be string");
    }
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string") {
      throw new TypeError("Last name must be string");
    }
    this._lastName = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("Age must be number");
    }
    this._age = value;
  }
}
