//Задание 1
// Преобразуйте строку js в верхний регистр JS.

console.log("\n Задание 1");

const str= 'js'.toUpperCase();

console.log(str);

//Задание 2
// Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

console.log("\n Задание 2");

const searchStart = (arr, str) => {
    let result = [];
    arr.forEach(item => {
        if (item.toUpperCase().startsWith(str.toUpperCase())) {
            result.push(item);
        }
    });
    return result;
}

console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));

//Задание 3
// Округлите число 32.58884:
// 1. До меньшего целого
// 2. До большего целого
// 3. До ближайшего целого

console.log("\n Задание 3");

let number= 32.58884;

console.log(Math.floor(number)); //Возвращает значение числа, округлённое к меньшему целому.

console.log(Math.ceil(number)); //Возвращает значение числа, округлённое к большему целому.

console.log(Math.round(number)); //Возвращает значение числа, округлённое до ближайшего целого.

//Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

console.log("\n Задание 4");

console.log(`min: ${Math.min(52, 53, 49, 77, 21, 32)}`);
console.log(`max: ${Math.max(52, 53, 49, 77, 21, 32)}`);

//Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

console.log("\n Задание 5");

// let random= (Math.floor(Math.random() * 10 + 1));
// console.log(random);

let random= (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random(1, 10));

//Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

console.log("\n Задание 6");

let getRandomArrNumbers = (num) => {
    arr = [];
    for (let i = 1; i <= num / 2; i++) {
        arr.push(random(0, num));
    }
    return arr;
}

console.log(getRandomArrNumbers(10));

//Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

console.log("\n Задание 7");

let getRandom = (min, max) => {
    if (min > max) {        
        return random (max, min); 
    }
    return random(min, max);
}

console.log(getRandom(1, 10));

//Задание 8
// Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

console.log("\n Задание 8");

let currentDate = new Date();

console.log(currentDate);

//Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

console.log("\n Задание 9");

let date= new Date();
date.setDate(currentDate.getDate() + 73);

console.log(date);

//Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

console.log("\n Задание 10");

let newDate = (date) => {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}\n${date.toTimeString()}`;
}

console.log(newDate(currentDate));