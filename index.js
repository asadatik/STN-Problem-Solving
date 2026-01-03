// problems.ts
// 10 TypeScript problem solutions
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var people = [
    { name: "Rahim", age: 25, gender: "male" },
    { name: "Karim", age: 30, gender: "male" },
    { name: "Riya", age: 22, gender: "female" },
    { name: "Sumi", age: 28, gender: "female" },
    { name: "Jahid", age: 27, gender: "male" },
];
function getNonFemaleNames(personArray) {
    var nonFemales = personArray.filter(function (person) { return person.gender !== "female"; });
    var names = nonFemales.map(function (person) { return person.name; });
    return names;
}
console.log("Task 1:", getNonFemaleNames(people));
var books = [
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
];
function getBookTitles(bookArray) {
    return bookArray.map(function (book) { return book.title; });
}
console.log("Task 2:", getBookTitles(books));
// ============================
// Task 3: Function Composition
// ============================
var square = function (n) { return n * n; };
var double = function (n) { return n * 2; };
var add5 = function (n) { return n + 5; };
function composedFunction(n) {
    var squared = square(n);
    var doubled = double(squared);
    var finalResult = add5(doubled);
    return finalResult;
}
console.log("Task 3:", composedFunction(3));
var cars = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Tesla", model: "Model 3", year: 2020 },
    { make: "BMW", model: "X5", year: 2018 },
];
function sortCarsByYearAsc(carArray) {
    return __spreadArray([], carArray, true).sort(function (a, b) { return a.year - b.year; });
}
console.log("Task 4:", sortCarsByYearAsc(cars));
var persons = [
    { name: "Rahim", age: 25 },
    { name: "Karim", age: 30 },
    { name: "Riya", age: 22 },
];
function updatePersonAgeByName(personArray, targetName, newAge) {
    return personArray.map(function (person) {
        return person.name === targetName ? __assign(__assign({}, person), { age: newAge }) : person;
    });
}
var updatedPersons = updatePersonAgeByName(persons, "Riya", 26);
console.log("Task 5:", updatedPersons);
// ============================
// Task 6: Array Reduction (sum of even numbers)
// ============================
var numbers = [1, 2, 3, 4, 5, 6, 10];
function sumOfEvenNumbers(numArray) {
    return numArray.reduce(function (sum, num) {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}
console.log("Task 6:", sumOfEvenNumbers(numbers));
// ============================
// Task 7: Leap Year Checker
// ============================
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
var yearToCheck = 2024;
console.log("Task 7:", yearToCheck, "is leap year?", isLeapYear(yearToCheck));
// ============================
// Task 8: Unique Values (remove duplicates)
// ============================
var numsWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
function getUniqueNumbers(arr) {
    return arr.filter(function (num, index) { return arr.indexOf(num) === index; });
    // or: return Array.from(new Set(arr));
}
console.log("Task 8:", getUniqueNumbers(numsWithDuplicates));
var students = [
    { name: "A", grades: [80, 90, 100] },
    { name: "B", grades: [70, 75, 80] },
    { name: "C", grades: [90, 95, 85] },
];
function getAverage(grades) {
    var sum = grades.reduce(function (total, g) { return total + g; }, 0);
    return sum / grades.length;
}
function sortStudentsByAverageDesc(studentArray) {
    return __spreadArray([], studentArray, true).sort(function (s1, s2) { return getAverage(s2.grades) - getAverage(s1.grades); });
}
console.log("Task 9:", sortStudentsByAverageDesc(students));
var products = [
    { quantity: 2, price: 100 },
    { quantity: 3, price: 150 },
    { quantity: 1, price: 200 },
];
function getTotalValue(items) {
    return items.reduce(function (total, item) { return total + item.quantity * item.price; }, 0);
}
console.log("Task 10:", getTotalValue(products));
