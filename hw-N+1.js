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
let a = Number('2');
let b = Number('3');
alert (a + b);

//Задание 5
let monthNumber = prompt('Введите номер месяца в году');

switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;

    case '2':
        console.log('Зима');
        break;

    case '3':
        console.log('Весна');
        break;

    case '4':
        console.log('Весна');
        break;

    case '5':
        console.log('Весна');
        break;

    case '6':
        console.log('Лето');
        break;

    case '7':
        console.log('Лето');
        break;

    case '8':
        console.log('Лето');
        break;

    case '9':
        console.log('Осень');
        break;

    case '10':
        console.log('Осень');
        break;

    case '11':
        console.log('Осень');
        break;

    case '12':
        console.log('Зима');
        break;

    default:
        console.log('Такого номера месяца в году существует');
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
let clientOS = 0;

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
