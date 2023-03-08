//Задание 1
let password = 'пароль';

let answer = prompt('Введите пароль');

answer=answer.toLocaleLowerCase();

if (answer==password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2
let c=2;
if (c>0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d=11;

let e=115;

if (d>100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4
const a = Number('2');
const b = Number('3');
alert (a + b);

//Задание 5
let monthNumber = prompt('Введите номер месяца в году');

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('Зима');
        break;

    case '3':
    case '4':
    case '5':
        console.log('Весна');
        break;

    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;

    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;

    default:
        console.log('Такого номера месяца в году не существует');
        break;
}

//Задание 7
let f = Number(prompt('Пожалуйста, введите любое число'));

if (f/2%1) {
    alert('Число нечетное')
} else {
    alert('Число четное')
}

//Задание 8
const clientOS = 0;

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS  по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}

//Задание 9
let clientDeviceYear = 2015;
let version = clientDeviceYear >= 2015 ? '' : 'облегченную';

if (clientOS===1) {
    console.log(`Установите ${version} версию приложения для Android по ссылке`);
} else if (clientOS===0) {
    console.log(`Установите ${version} версию приложения для IOS по ссылке`);
}
