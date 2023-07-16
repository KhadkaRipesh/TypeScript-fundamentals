"use strict";
// Basic Types
let id = 5;
let company = "Ripesh Khadka";
let isMale = true;
let x = "Hello";
// Initializing
let age;
age = 20;
// Array and Tuples
let ids = [1, 2, 3, 4, 5];
ids.push(2);
let arr = [1, "Hello"];
let person = [1, "Hello", true];
// Tupple Array
let students = [
    [1, "Ripesh Khadka"],
    [2, "Jeeban Giri"],
];
// Unions
let Sid = 21;
// Enum
// starts from 0 on default
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
const user = {
    id: 1,
    name: "Ripesh Khadka",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
// let customerId = cid as number;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Ripesh Khadka",
};
const add = (x, y) => x + y;
// Class
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const ripesh = new Student(1, "Ripesh");
// extending class
class Teacher extends Student {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Teacher(3, "Ronal", "Tutor");
console.log(emp.name);
console.log(emp.register());
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Ripesh", "Jeeban"]);
numArray.push();
