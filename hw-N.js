let a=10;
alert (a=20);

let y= alert ('2007') //Год выпуска первого Iphone;

let name= alert ('Brendan Eich') //Имя создателя языка JavaScript;

let b=10;
let c=2;
alert (b+c);
alert (b-c);
alert (b*c);
alert (b/c);

let d=5;
let result=c**d;
alert (result);

let a1=9;
let b1=2;
let result1=a1%b1;
alert (result1);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num --;
alert(num);

let age = Number(prompt ("Сколько вам лет?"));
alert (age);

//Создание объекта user
const user = {
    name: 'Ivan', //"String"
    age: 20, //"Number"
    isAdmin: true, //"Boolean"
}

//Добавление объекту user свойство city of residence.
user.cityOfresidence= "Moscow";

//Изменение у объекта user свойства age на любое другое новое значение.
user.age= "30";

//Удаление объекта user свойство city of residence.
delete user.cityOfresidence;

console.log(user);

alert(user.name);
alert(user.age);
alert(user.isAdmin);

let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);
console.log(user[info]);

//Задание 10
let nameUser = prompt('Как вас зовут?');
alert(`Привет, ${nameUser}!`);