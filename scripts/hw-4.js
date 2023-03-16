//Задание 1
// Version 1
function num(a, b) {
    if (a<=b) {
        return a
    } else {
        return b
    }
}

console.log(num(8, 4));
console.log(num(6, 6));

// Version 2
// const num = (a, b) => {
//     a<=b ? console.log(a) : console.log(b);
// }
// num(8, 4);
// num(6, 6);

//Задание 2
const number = (n) => {
    console.log(n % 2 === 0 ? 'Число четное' : 'Число нечетное');
}

number(5);

//Задание 3.1
const square = (c) => {
    console.log(c**2);
}

square(4);

//Задание 3.2
const squareReturn = (d) => {
    return d**2;
}
// console.log(squareReturn(5));

//Задание 4
const answer = () => {
   let q= prompt('Сколько вам лет?');
   if (q<0) {
        alert('Вы ввели неправильное значение');
   } else if (q>=0 && q<=12) {
        alert('Привет, друг!');
   } else if (q>=12) {
        alert('Добро пожаловать!');
    } 
}

answer();

//Задание 5
function mult (f, g) {
    if (!isNaN(f) && !isNaN(g)) {
        return f * g;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

console.log(mult(3, 5));
console.log(mult(3, 'dsa'));

//Задание 6
const cube = (n1) => {
    n1= prompt('Введите любое число')
    //  if (!isNaN (n1)) {
    // console.log(`${n1} в кубе равняется ${n1 ** 3}`);
    //  } else {
    // console.log('Переданный параметр не является числом');
    //  }
    console.log(!isNaN(n1) ? `${n1} в кубе равняется ${n1**3}` : 'Переданный параметр не является числом');
    let i=0;
    while (i>=0 && i<=10) {
        console.log(`${i} в кубе равняется ${i ** 3}`);
        i++;
    }
}

cube();

//Задание 7
function getRectangleArea() {
    return this.radius * this.radius * 3.14;
}

function getRectanglePerimeter() {
    return this.radius * 3.14 * 2; 
}

const circle1 = {
    radius: 4,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

const circle2 = {
    radius: 5,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8
const game1 = () => {
    let monthNumber= Number(prompt('Введите номер месяца'));
    if (monthNumber===1 || monthNumber===2 || monthNumber===12) {
        return alert('Зима');
    } else if (monthNumber>2 && monthNumber<=5) {
        return alert('Весна');
    } else if (monthNumber>5 && monthNumber<=8) {
        return alert('Лето');
    } else if (monthNumber>8 && monthNumber<=11) {
        return alert('Осень');
    } else {
        return alert('Некорректные данные');
    } 
}

game1();