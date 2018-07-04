console.log('Object Date');

// Task 1
// RU: Создать текущую дату и вывести ее в формате dd.mm.yyyy и dd Month yyyy
// EN: Create current date and display it in the console according to the format
//     dd.mm.yyyy и dd Month yyyy
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let currentDay = new Date();
let dd = currentDay.getDate();
let mm = currentDay.getMonth();
let yyyy = currentDay.getFullYear();
let month = months[mm];

let date1 = dd + '.' + (mm + 1) + '.' + yyyy;
let date2 = dd + ' ' + month + ' ' + yyyy;

console.log(date1);
console.log(date2);

// Task 2
// RU: Создать объект Date из строки '15.03.2025'.
// EN: Create an object Date from the string '15.03.2025'.
let date = "15.03.2025".split(".");
let day = date[0];
let mnth = date[1];
let year = date[2];
let dt = new Date(year, mnth, day);
console.log(dt);

// Task 3
// RU: Создать объект Date, который содержит:
//     1. завтрашнюю дату,
//     2. первое число текущего месяца,
//     3. последнее число текущего месяца
// EN: Create an object Date, which represents:
//     1. tomorrow
//     2. first day of the current month
//     3. last day of the current month
let today = new Date();
let tomorrow = new Date(today.getFullYear(),today.getMonth(), (today.getDate() + 1));
console.log('tomorrow is: ' +tomorrow);

let firstDay = new Date(today.getFullYear(),today.getMonth(), 1);
console.log('First day of the month: ' + firstDay);

let lastDay = new Date(today.getFullYear(),today.getMonth() + 1, 0);
console.log('Last day of the month: ' + lastDay);

// Task 4
// RU: Подсчитать время суммирования чисел от 1 до 1000.
// EN: Calculate the time of summing numbers from 1 to 1000.
let start = Date.now();
let sum = 0;

for (let i = 1; i < 1000; ++i) {
    sum = sum + i;
}

let end = Date.now();
let time = end - start;
console.log('Execution time: ' + time);

// Task 5
// RU: Подсчитать количество дней с текущей даты до Нового года.
// EN: Calculate the number of days from the current date to the New Year.
let now = new Date();
let endofYear = new Date(now.getFullYear(), 11, 31);
let diff = endofYear - now;
let oneDay = 1000 * 60 * 60 * 24;
let days = Math.floor(diff / oneDay);
console.log(days);
