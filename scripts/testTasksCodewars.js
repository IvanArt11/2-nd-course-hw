//Задание 1 Выяснить, является ли фигура кубом
/*Чтобы найти объем (в кубических сантиметрах) прямоугольного параллелепипеда, используйте формулу:
volume = Length * Width * Height
Но кто-то забыл использовать надлежащий учет, поэтому у нас есть только объем и длина одной стороны!
Вы должны выяснить, равны ли стороны прямоугольного параллелепипеда (= является кубом).
Возврат true, если кубоид может иметь равные стороны, возврат false в противном случае.
Возврат false также для недопустимых чисел (например, объем или сторона меньше или равна 0).
Примечание: сторона будет целым числом
*/

console.log("\n Задание 1");

var cubeChecker = function(volume, side){
    // return side > 0 && Math.pow(side, 3) === volume;
    return side > 0 ? Math.pow(side, 3) === volume : false;
};

console.log(cubeChecker(56.3, 1));
console.log(cubeChecker(-1, 2));
console.log(cubeChecker(8, 3));
console.log(cubeChecker(8, 2));

//Задание 2 Потрошители троллей
/*Тролли атакуют ваш раздел комментариев!
Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!».
Примечание: для этой ката yне считается гласной.
*/

console.log("\n Задание 2");

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
};

console.log(disemvowel('This website is for losers LOL!'));
console.log(disemvowel('What are you, a communist'));

//Задание 3 Thinkful - Логические упражнения: Светофор
/*Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения с green, на yellow, на red, а затем green снова на.
Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние источника света, и возвращает строку, представляющую состояние, в которое свет должен измениться.
Например, когда вход равен green, вывод должен быть yellow.
*/

console.log("\n Задание 3");

function updateLight(current) {
    if (current === 'green') {
       return 'yellow';
     } else if (current === 'yellow') {
       return 'red';
     } else if (current === 'red') {
       return 'green';
     };

    //  Version 2
    // return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

console.log(updateLight("green"));