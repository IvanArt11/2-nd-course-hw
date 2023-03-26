//Задание 1
// Написать функцию, которая на вход принимает массив чисел и callback-функцию. Функция должна возвращать целое число, в зависимости от callback это может быть сумма всех чисел массива, произведение. Функции, вычисляющие произведение и сумму чисел массива, также необходимо реализовать.

console.log("\n Задание 1");

const sum = (arr) => arr.reduce((prev, item) => prev + item);
const mult = (arr) => arr.reduce((prev, item) => prev * item);

const getResult = (arr, callback) => callback(arr);

console.log(getResult([3, 4, 1, 9], mult));
console.log(getResult([3, 4, 1, 9], sum));

//Задание 2
// Дан массив объектов:
// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];
// Необходимо отсортировать элементы массива в порядке увеличения возраста.

console.log("\n Задание 2");

const users = [
    	{name: 'Jon', age: 22},
    	{name: 'Richard', age: 18},
    	{name: 'Anton', age: 32},
    	{name: 'Lida', age: 23},
    	{name: 'Bob', age: 44}
    ];

const getSortedArrayObj = (users) => users.sort((a, b) => a.age - b.age);

getSortedArrayObj(users);
console.log(users);
    
//Задание 3
// Создайте функцию each, которая может производить любые манипуляции над переданным массивом в зависимости от переданной callback-функции. Реализуйте несколько callback-функций, которые будут делать следующее:
// - Переворачивать массив:
// const arr = [1, '4', 9, 'two'];
// each(arr, reversArr); // ['two', 9, '4', 1]
// - Преобразовывать все элементы к числу; если элемент получился NaN, то удалять его:
// const arr = [1, '4', false, 9, 'two'];
// each(arr, toNumberArr); // [1, 4, 0, 9]

console.log("\n Задание 3");

let arr = [1, '4', 9, 'two'];
const reversArr = (arr) => arr.reverse();
const each = (arr, callback) => callback(arr); 
console.log(each(arr, reversArr));

arr = [1, '4', false, 9, 'two'];
const toNumberArr = (arr) => arr.map(item => Number(item)).filter(item => !isNaN(item));
console.log(each(arr, toNumberArr));

//Задание 4
// Напишите программу, которая на протяжении 30 секунд, каждые 3 секунды, будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

const task = setTimeout(() => {
    console.log("\n Задание 4");
}, 3000);

const interval = setInterval(() => {
        let date = new Date();
        console.log(date);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30000);

// Version 2
// const timer = (deadline) => {
// 	const interval = setInterval(() => {
// 		console.log(new Date());
// 	}, 3000);
// 	setTimeout(() => {
// 		clearInterval(interval);
// 		console.log(`${deadline} секунд прошло`);
// 	}, deadline * 1000)
// }
// timer(30);

//Задание 5
// У нас есть код, имитирующий телефонный звонок:
// function calling() {
//     console.log('Звоню!')
// };
// function beeps() {
//     setTimeout(() => {
//         console.log('Идут гудки...')
//     }, 1000);
// }
// function talk() {
//     console.log('Разговор')
// }
// calling();
// beeps();
// talk();
// Сейчас, если его запустить, последовательность будет 
// 'Звоню!', 'Разговор', 'Идут гудки…', но разговор всегда начинается после гудков, поэтому вам нужно исправить данный код так, чтобы выводилась верная последовательность:
// 'Звоню!', 'Идут гудки…', 'Разговор'
// Добавлять новые setTimout и setInterval нельзя, также нельзя удалять существующий setTimout, но можно менять код внутри его.

console.log("\n Задание 5");

function calling() {
    console.log('Звоню!');
    beeps(talk);
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();