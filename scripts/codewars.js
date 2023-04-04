//Задание 1
// Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
// Если вхождений не найдено, должно быть возвращено число 0.

console.log("\n Задание 1");

// Version 1
// function strCount(str, letter){
//     return str.split(letter).length-1;
// }

// Version 2
function strCount(str, letter){  
    return str.split('').filter(a => a == letter).length;
  }

  console.log(strCount('Hello', 'o'));
  console.log(strCount('Hello', 'l'));

//Задание 2
// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

console.log("\n Задание 2");

function squareSum(numbers){
    return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
}

console.log(squareSum([0, -3, 4, 5]));

//Задание 3
// Ваша задача состоит в том, чтобы найти ближайшее квадратное число nearest_sq(n)или nearestSq(n)положительное целое число n.
// Например, если n = 111, то nearest\_sq(n)( nearestSq(n)) равно 121, так как 111 ближе к 121, квадрату 11, чем 100, квадрату 10.
// Если это nуже идеальный квадрат (например n = 144, n = 81, и т. д.), вам нужно просто вернуть n.

console.log("\n Задание 3");

function nearestSq(n){
    return Math.round(Math.sqrt(n)) ** 2;
}
console.log(nearestSq('125'));

//Задание 4
// Завершите решение так, чтобы оно перевернуло переданную в него строку.
// 'world'  =>  'dlrow'

console.log("\n Задание 4");

function solution(str){
    return str.split('').reverse().join('');
}

console.log(solution('world'));

//Задание 5
// Что, если нам нужно, чтобы длина слов, разделенных пробелом, была добавлена ​​в конце того же слова и возвращена в виде массива?
// Пример (ввод --> вывод)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленного к каждому элементу.
// Примечание. Строка будет содержать как минимум один элемент; слова всегда будут разделены пробелом.

console.log("\n Задание 5");

function addLength(str) {
    return str.split(" ").map(word => `${word} ${word.length}`);
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));

//Задание 6
/*Есть предложение «3 по цене 2» (или «2+1» , если хотите) на манго. Для данного количества и цены (за манго) рассчитайте общую стоимость манго.
Примеры
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/

console.log("\n Задание 6");

function mango(quantity, price){
    let m = 0;
    for (i = 1; i <= quantity; i++) {
        if (i % 3 === 0) {
            m++
        }
    }
    return (quantity-m) * price
}

//Versuin 2
/*function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
}
*/

console.log(mango(2, 3));
console.log(mango(3, 3));
console.log(mango(5, 3));
console.log(mango(9, 5));

//Задание 7
/*Натан любит кататься на велосипеде.
Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
Например:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/

console.log("\n Задание 7");

function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));

//Задание 8
/*Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.
*/

console.log("\n Задание 8");

function invert(array) {
    return array.map(el => -el);
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));

//Задание 9
/*Завершите функцию, которая принимает неотрицательное целое число nв качестве входных данных и возвращает список всех степеней 2с показателем степени от 0до n( включительно ).
Примеры
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

console.log("\n Задание 9");

function powersOfTwo(n){
    let result = [];
    for (i = 0; i <= n; i++){
        result.push(Math.pow(2, i));
    }
    return result;
  }
  console.log(powersOfTwo(3));

//Задание 10
/*Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. Пример:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
*/

console.log("\n Задание 10");

function grow(x){
    return x.length ? x.reduce((a, b)=> (a * b)) : 0;
}

// Version 2
/*
function grow(x){
    return x.reduce((a, b)=>a * b);
}
*/

console.log(grow([1, 2, 3, 4]));
console.log(grow([-1, 2, 2, 2, 2, 2]));

//Задание 11
/*Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.
Например (Вход -> Выход) :
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

console.log("\n Задание 11");

var summation = function (num) {
    var sum = 0;
  for(var i=0; i<=num; i++){
    sum += i;
  }
  return sum;
}

console.log(summation(2));
console.log(summation(8));

//Задание 12
// Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

console.log("\n Задание 12");

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
    // return s.replace(/!/g, '');
}

console.log(removeExclamationMarks("Hello World!"));

//Задание 13
/*Ваша задача состоит в том, чтобы сделать две функции ( maxи min, или maximumи и minimumт. д., в зависимости от языка), которые получают на вход список целых чисел и возвращают наибольшее и наименьшее число в этом списке соответственно.
Примеры (ввод -> вывод)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Примечания
Вы можете считать, что пустых массивов/векторов не будет.
*/

console.log("\n Задание 13");

var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

console.log(`min: ${min([4,6,2,1,9,63,-134,566])}`);
console.log(`max: ${max([4,6,2,1,9,63,-134,566])}`);
console.log(`min: ${min([-52, 56, 30, 29, -54, 0, -110])}`);
console.log(`max: ${max([-52, 56, 30, 29, -54, 0, -110])}`);
console.log(`min: ${min([42, 54, 65, 87, 0])}`);
console.log(`max: ${max([42, 54, 65, 87, 0])}`);
console.log(`min: ${min([5])}`);
console.log(`max: ${max([5])}`);

//Задание 14
// Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом.

console.log("\n Задание 14");

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
    // return x.split("").reverse().join("").toUpperCase() === x.toUpperCase() ? true : false
}

console.log(isPalindrome("a"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));

//Задание 15
/*В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел aи b. Каждый список будет состоять из 3 положительных целых чисел выше 0, представляющих размеры прямоугольных параллелепипедов aи b. Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше.
Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), объем равен a12, а объем bравен 20. Следовательно, функция должна вернуть 8.
Ваша функция будет проверена как на готовых примерах, так и на случайных.
Если можете, попробуйте написать это одной строкой кода.
*/

console.log("\n Задание 15");

function findDifference(a, b) {
    return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y));
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));
console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));

//Задание 16
/*Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки):
Пример: ( Ввод1, Ввод2 -->Вывод )
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Примечания:
Если какой-либо вход является пустой строкой, считайте ее нулевой.
Входные данные и ожидаемые выходные данные никогда не превысят ограничение на 32-разрядное целое число со знаком ( 2^31 - 1)
*/

console.log("\n Задание 16");

function sumStr(a, b) {
    // return String(Number(a) + Number(b));
    return String(+a + +b);
}

console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
console.log(sumStr("", ""));
console.log(sumStr("2", ""));
console.log(sumStr("-5", "3"));

//Задание 17
/*Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост 2 ).
если ИМТ <= 18,5, вернуть "Недостаточный вес"
если ИМТ <= 25,0, вернуть «Нормальный»
если ИМТ <= 30,0 вернуть "Избыточный вес"
если ИМТ > 30, верните «Ожирение».
*/

console.log("\n Задание 17");

function bmi(weight, height) {
    const bmi = weight / height ** 2;
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25) {
        return "Normal"
    } else if (bmi <= 30) {
        return "Overweight"
    } else {
        return "Obese"
    }

    // Version 2
    // return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}

console.log(bmi(50, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(100, 1.80));

//Задание 18
/*Если указано число от 0 до 9, верните его словами.
Вход :: 1
Выход :: "Один".
Если ваш язык поддерживает это, попробуйте использовать оператор switch .
*/

console.log("\n Задание 18");

function switchItUp(number){
    switch (number) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return 'Unknown number';
    }
}

// Version 2
// function switchItUp(n){
//     return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine",][n];
// }

console.log(switchItUp(0));
console.log(switchItUp(1));
console.log(switchItUp(9));
console.log(switchItUp(10));

//Задание 19
/*Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
name + " plays banjo" 
name + " does not play banjo"
Указанные имена всегда являются допустимыми строками.
*/

console.log("\n Задание 19");

function areYouPlayingBanjo(name) {
    return name.toUpperCase().startsWith('R') ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Ringo"));

//Задание 20
/*Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.
На выходе должны быть две заглавные буквы с точкой, разделяющей их.
Это должно выглядеть так:
Sam Harris=>S.H
patrick feeney=>P.F
*/

console.log("\n Задание 20");

function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.');
}

console.log(abbrevName('Sam Harris'));
console.log(abbrevName('patrick feeney'));