
//01
type Gender = "male" | "female";

interface Person {
  name: string;
  age: number;
  gender: Gender;
}

const people: Person[] = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karim", age: 30, gender: "male" },
  { name: "Riya", age: 22, gender: "female" },
  { name: "Sumi", age: 28, gender: "female" },
  { name: "Jahid", age: 27, gender: "male" },
];

function getNonFemaleNames(personArray: Person[]): string[] {
  const nonFemales = personArray.filter(
    (person) => person.gender !== "female"
  );
  const names = nonFemales.map((person) => person.name);
  return names;
}


console.log(getNonFemaleNames(people));

//02

interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: "Coder", author: "ATIK", year: 2008 },
  { title: "MASTER OF NEXT.JS", author: "ASADUJJAMAN", year: 2015 },
  { title: "MARHABA JS", author: "JHAKAR MAHBUB", year: 2024 },
];

function getBookTitles(bookArray: Book[]): string[] {
  return bookArray.map((book) => book.title);
}

console.log( getBookTitles(books));

//03

const square = (n: number): number => n * n;
const double = (n: number): number => n * 2;
const add5 = (n: number): number => n + 5;

function composedFunction(n: number): number {
  const squared = square(n);
  const doubled = double(squared);
  const finalResult = add5(doubled);
  return finalResult;
}

console.log( composedFunction(3));

//04

interface Car {
  make: string;
  model: string;
  year: number;
}

const cars: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Tesla", model: "Model 3", year: 2020 },
  { make: "BMW", model: "X5", year: 2018 },
];

function sortCarsByYearAsc(carArray: Car[]): Car[] {
  return [...carArray].sort((a, b) => a.year - b.year);
}

console.log( sortCarsByYearAsc(cars));

//05

interface SimplePerson {
  name: string;
  age: number;
}

const persons: SimplePerson[] = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 30 },
  { name: "Riya", age: 22 },
];

function updatePersonAgeByName(
  personArray: SimplePerson[],
  targetName: string,
  newAge: number
): SimplePerson[] {
  return personArray.map((person) =>
    person.name === targetName ? { ...person, age: newAge } : person
  );
}

const updatedPersons = updatePersonAgeByName(persons, "Riya", 26);
console.log( updatedPersons);

//06

const numbers: number[] = [1, 2, 3, 4, 5, 6, 10];

function sumOfEvenNumbers(numArray: number[]): number {
  return numArray.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

console.log(sumOfEvenNumbers(numbers));


// Task 7


function isLeapYear(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

const yearToCheck = 2024;

console.log( yearToCheck, "is leap year?", isLeapYear(yearToCheck));


// 8

const numsWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];

function getUniqueNumbers(arr: number[]): number[] {
  return arr.filter((num, index) => arr.indexOf(num) === index);

}

console.log( getUniqueNumbers(numsWithDuplicates));

// 9

interface Student {
  name: string;
  grades: number[];
}

const students: Student[] = [
  { name: "A", grades: [80, 90, 100] },
  { name: "B", grades: [70, 75, 80] },
  { name: "C", grades: [90, 95, 85] },
];

function getAverage(grades: number[]): number {
  const sum = grades.reduce((total, g) => total + g, 0);
  return sum / grades.length;
}

function sortStudentsByAverageDesc(studentArray: Student[]): Student[] {
  return [...studentArray].sort(
    (s1, s2) => getAverage(s2.grades) - getAverage(s1.grades)
  );
}

console.log( sortStudentsByAverageDesc(students));

// 10

interface Product {
  quantity: number;
  price: number;
}

const products: Product[] = [
  { quantity: 2, price: 100 },
  { quantity: 3, price: 150 },
  { quantity: 1, price: 200 },
];

function getTotalValue(items: Product[]): number {
  return items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
}

console.log( getTotalValue(products));
