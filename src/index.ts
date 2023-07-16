// Basic Types
let id: number = 5;
let company: string = "Ripesh Khadka";
let isMale: boolean = true;
let x: any = "Hello";

// Initializing
let age: number;
age = 20;

// Array and Tuples
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(2);
let arr: any[] = [1, "Hello"];

let person: [number, string, boolean] = [1, "Hello", true];

// Tupple Array
let students: [number, string][] = [
  [1, "Ripesh Khadka"],
  [2, "Jeeban Giri"],
];

// Unions
let Sid: string | number = 21;

// Enum
// starts from 0 on default
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Right);

// objects
// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "Ripesh Khadka",
// };

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Ripesh Khadka",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
// let customerId = cid as number;

// Functions

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// interface

interface UserInterface {
  id: number;
  name: string;
}

const user1: UserInterface = {
  id: 1,
  name: "Ripesh Khadka",
};

//   function interfaces
interface Mathfunc {
  (x: number, y: number): number;
}
const add: Mathfunc = (x: number, y: number): number => x + y;

// Class
class Student implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered.`;
  }
}

const ripesh = new Student(1, "Ripesh");

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// extending class
class Teacher extends Student {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Teacher(3, "Ronal", "Tutor");
console.log(emp.name);
console.log(emp.register());

// generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Ripesh", "Jeeban"]);

numArray.push();
