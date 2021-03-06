console.log('Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().
// let Tune = function(title, artist) {
//     this.title = title;
//     this.artist = artist;
//     this.concat = function() {
//         return this.title + " " + this.artist;
//     }
// }

// let t  =new Tune("Title", "artistName");
// console.log(t.concat());

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с привытными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().
// let Tune = function(title, artist) {
//     var title = title;
//     var artist = artist;
//     this.concat = function() {
//         return title + " " + artist;
//     }
// }

// let tune  = new Tune("Title", "artistName");
// console.log(tune.concat());

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.
// let a = "hello";
// if (typeof String.prototype.exclaim === 'undefined') {
//     String.prototype.exclaim = function() {
//         console.log(this.concat("!"));
//     };
// }
// a.exclaim();

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class
// let Book = function(title, author) {
//     this.title = title;
//     this.author = author;
//     this.getTitle = function() {
//         return this.title;
//     }

//     this.getAuthor = function() {
//         return this.author;
//     }
// };

// let TechBook = function(title, author, category) {
//     Book.call(this, title, author);
//     this.category = category;
//     this.getCategory = function() {
//         return this.category;
//     }
//     this.getBook = function() {
//         return this.title + " " + this.author + " " + this.category;
//     }
// };
// TechBook.prototype = Object.create(Book.prototype);

// let t = new TechBook("title", "author", "category");
// console.log("TITLE: " + t.getTitle());
// console.log("AUTHOR: " + t.getAuthor());
// console.log("CATEGORY: " + t.getCategory());
// console.log("BOOK: " + t.getBook());

//Solution using classes
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     getTitle() {
//         return this.title;
//     }
//     getAuthor() {
//         return this.author;
//     }
// }

// class TechBook extends Book {
//     constructor(title, author, category) {
//         super(title, author);
//         this.category = category;
//     }
//     getCategory() {
//         return this.category;
//     }
//     getBook() {
//         return this.title + " " + this.author + " " + this.category;
//     }
// }

// let t = new TechBook("title", "author", "category");
// console.log("TITLE: " + t.getTitle());
// console.log("AUTHOR: " + t.getAuthor());
// console.log("CATEGORY: " + t.getCategory());
// console.log("BOOK: " + t.getBook());

// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.
// class Shape {
//     constructor() {
//         Shape.count++;
//     }
// }
// Shape.count = 0;
// class Rectangle extends Shape {
//      constructor(side1, side2) {
//          super();
//          this.side1 = side1;
//          this.side2 = side2;
//         }

//     calculateArea() {
//         return this.side1 * this.side2;
//     }
//  }

// let r1 = new Rectangle(1, 2);
// let r2 = new Rectangle(5, 2);
// let s = new Shape();
// console.log(Shape.count);

// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

// let Person = function() {}

// Person.prototype.setFirstName = function(name) {
//     this.firstName = name;
//     return this;
// }

// Person.prototype.setLastName = function(name) {
//     this.lastName = name;
//     return this;
// }

// let p = new Person();
// console.log(p.setFirstName("Lusine").setLastName("Hakobyan"));

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.
// let data = { };
// Object.defineProperty(data, "id", {
//     value: 1,
//     writable: true,
// });
// Object.defineProperty(data, "type", {
//     value: 'primary',
//     enumerable: true
// });
// Object.defineProperty(data, "category", {
//     enumerable: true,
//     configurable: true,
//     get: function() {
//         return this._category;
//     },
//     set: function(newCategory) {
//         return this._category = newCategory;
//     }
    
// });

// for (let field in data)
// 	console.log(field);

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.
// let rectangle = {
//     width: 10,
//     lenght: 15
// };
// Object.preventExtensions(rectangle);
// rectangle.area = 150;
// console.log(rectangle);

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.
class Task {
    constructor(name, st) {
        this.name = name;
        this.st = st;
    }

    print() {
        console.log("[" + this.st + "]" + this.name);
    }
    changeStatus(newStatus) {
        this.st = newStatus;
    }
}

let set = new Set();
const t1 = new Task("task1", "new");
const t2 = new Task("task2", "new");
const t3 = new Task("task3", "completed");
const t4 = new Task("task4", "new");
const t5 = new Task("task5", "completed");

 set.add(t1).add(t5).add(t2).add(t4).add(t3);
set.forEach(n => console.log(n.print()));
t1.changeStatus("completed");
set.forEach(n => console.log(n.print()));
set.delete(t3);
set.forEach(n => console.log(n.print()));
let s = [];
set.forEach(n => s.push(n.name));
console.log(s.sort());
set.forEach(n => console.log(n.print()));
set.clear();
console.log(set.size)