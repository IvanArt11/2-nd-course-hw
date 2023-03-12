//Задание 1
let i=0;
while (i<2) {
    console.log('Привет!');
    i++;
}

//Задание 2
let a=1;
while (a<=5) {
    console.log(a);
    a++;
}

//Задание 3
let b=7;
while (b<=22) {
    console.log(b);
    b++;
}

// //Задание 4
let obj = {'Коля': '200', 'Вася': '300', 'Петя': '400'};

for(key in obj){
    console.log(key + ' - зарплата ' + obj[key] + ' долларов');
}

// //Задание 5
let n = 1000;
let num=0;

while (n>50) {
    num++;
    n/=2;
};

console.log(n);
console.log(num);

//Задание 6
const firstFriday=3;
for (let i = firstFriday; i <= 31; i+=7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}