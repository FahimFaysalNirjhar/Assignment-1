// Task 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num: number) => num % 2 === 0);
};

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);

// Task 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

console.log(reverseString("typescript"));

console.log(reverseString("type"));

//Task 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") return "String";
  return "Number";
}

console.log(checkType("Hello"));
console.log(checkType(42));

//Task 4
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

//Task 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

//Task 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

console.log(student.getDetails());

//Task 7
function getIntersection(array1: number[], array2: number[]): number[] {
  return array1.filter((num) => array2.includes(num));
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
