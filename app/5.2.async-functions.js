
// Task 01
// Создайте асинхронную функцию f1, используя FDS (Function Declaration Statement).
// Функция должна принимать два параметра a и b и возвращать сумму a+b.
// Выведите значение, которое вернет функция в консоль.
// Обработаете промис и выведите значение в консоль.
async function sum(a, b) {
    return a + b;
}
const promise = sum(5, 6);
promise.then(res => console.log(res));

// Task 02
// Создайте асинхронную функцию f2, используя FDE (Function Definition Expression).
// Функция должна возвращать 'Promise Data', используя Promise.resolve()
// Выведите значение, которое вернет функция в консоль.
// Обработаете промис и выведите значение в консоль.
const f2 = async function() {
    return Promise.resolve('Promise Data');
}
const promise = f2();
promise.then(data => console.log(data));

// Task 03
// Создайте класс C1. Добавьте асинхронный метод f3,
// Метод должен генерть исключение 'Error occurs in f3 method'
// Создайте экземпляр класса и вызовите метод.
// Обработаете промис.
class C1 {
    async f3() {
        throw "Error occurs in f3 method";
    }
}
(new C1().f3().catch(err => console.log(err)));

// Task 04
// Cоздайте функцию makeRequest, используя FDS (Function Declaration Statement).
// Функция должна принимать один параметр url и возвращать промис,
// который перейдут в состояние resolved через 2с. и вернет значение параметра.
// Первой строкой в функции выведите сообщение 'makeRequest is called'
// Cоздайте функцию f4, используя FDS (Function Declaration Statement).
// Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.
function makeRequest(url) {
    console.log("makeRequest is called");
    return new Promise(resolve => {
        setTimeout(resolve, 2000, url);
    });
}
(function f4() {
    console.log(makeRequest(2));
})();
// Task 05
// Внесите изменения в функцию f4 из предыдущего задания так, чтобы в консоле появилось
// значение переданого параметра в функцию makeRequest
async function f4() {
     console.log(await makeRequest('url'));
}
f4()
// Task 06
// Cоздайте асинхронную функцию f6, используя FDS (Function Declaration Statement).
// Функция должна вызвать два раза функцию makeRequest с разными значениями параметра
// Перед вызовом и после каждого вызова makeRequest функция должна выводить в консоль сообщение.
// Вернуть массив, который должен содержать значения переданые функции makeRequest.
// Обработаете результат работы функции f6
(async function f6() {
    console.log("Before First call of makeRequest");
    const r1 = makeRequest('url1');
    console.log("After First call of makeRequest");
    console.log("Before Second call of makeRequest");
    const r2 = makeRequest('url1');
    console.log("After Second call of makeRequest");
    return [r1, r2];
})().then(console.log);

// Task 07
// Измените асинхронную функцию f6 из предыдущего задания так, чтобы вызовы функии
// makeRequest выполнялись паралельно.
(function f6() {
    return Promise.all([
        makeRequest('url1'),
        makeRequest('url2')
    ])
})().then(result => console.log(result)).catch(err => console.log(err));

// Task 08
// Cоздайте асинхронную функцию f8, используя FDS (Function Declaration Statement).
// Функция должна вызвать функцию makeRequest и вернуть результат ее работы.
// Обработайте результат работы функции f8
(async function f8() {
    return await makeRequest('url');
})().then(res => console.log(res));

// Task 09
// Создайте масив урлов ['http://a', 'http://b'].
// Напишите функцию makeRequest, которая принимает один параметр - url.
// Функция в первой строке должна выводить в консоль сообщение 'makeRequest is called'
// и возвращать через 2 с для первого урла объект { name: 'Ann' }, а для второго
// урла объект { age: 16 }.
// Создайте асинхронную функцию f9 которая должна вызвать функцию makeRequest для каждого урла
// и вернуть объект {name: 'Ann', age: 16}
// Обработайте результат работы функции f8
const arr = ['http://a', 'http://b'];
function makeRequest(url) {
    console.log("makeRequest is called");
    return new Promise(resolve => {
        setTimeout(resolve, 2000, url === 'http://a' ? { name: 'Ann' } : { age: 16 });
    })
}
(async function f9(){
    return Promise.all([
        makeRequest(arr[0]),
        makeRequest(arr[1])
    ]);
})().then(res => console.log(...res));

