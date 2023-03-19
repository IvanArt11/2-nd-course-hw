//Задание 1
console.log("\n Задание 1");
let number= [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < number.length; i++) {
//     if (number[i] === 0) break;
// 	console.log(number[i]);
// }
for (item of number) {
    console.log(item);
    if (item === 10) break;
}

//Задание 2
console.log("\n Задание 2");
console.log(number.indexOf(4)+1);

//Задание 3
console.log("\n Задание 3");
number= [1, 3, 5, 10, 20];
number = number.join(' ');
console.log(number);

//Задание 4
console.log("\n Задание 4");
let arr= [];
for (let i = 0; i < 3; i++) {
    arr.push([1]);
    for (let y = 0; y < 3; y++) {
        arr[i][y]=1;
    }
}
console.log(arr);


//Задание 5
console.log("\n Задание 5");
arr= [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

//Задание 6
console.log("\n Задание 6");
arr= [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
arr.sort().pop();
console.log(arr);

//Задание 7
console.log("\n Задание 7");
arr= [9, 8, 7, 6, 5];
console.log(arr.includes(Number(prompt('Введите число от 1 до 10'))));

//Задание 8
console.log("\n Задание 8");
let string= 'abcdef';
string=string.split('').reverse().join('');
console.log(string);

//Задание 9
console.log("\n Задание 9");
arr= [[1, 2, 3,],[4, 5, 6]];
arr=arr.flat();
console.log(arr);

// Version 2
// arr=[...arr[0], ...arr[1]]
// console.log(arr);

//Задание 10
console.log("\n Задание 10");
arr= [7, 1, 4, 9, 5, 8];
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i+1]);
};

// Попробовал еще так сделать
// arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 10 + 1));
// }
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//         console.log(arr[i] + arr[i+1]);
//     };

//Задание 11
console.log("\n Задание 11");
arr= [5, 4, 3, 2, 1]
arrNew= arr.map(item=>item**2);
console.log(arrNew);

//Задание 12
console.log("\n Задание 12");
const lengthWords= ['слово', '', 'слог', 'длинное предложение', 'буква'];
let lengthWordsNew=lengthWords.map(item=>item.length);
console.log(lengthWordsNew);

//Задание 13
console.log("\n Задание 13");
arr= [6, 4, 2, 8, 1];
let negative= arr.map(item => -item);
console.log(negative);

//или в задании имелось ввиду это
arr= [2, -1, 3, -4, 5, -6];
let onlyNegative= arr.filter(item => item < 0);
console.log(onlyNegative); 

//Задание 14
console.log("\n Задание 14");
arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
console.log(arr);
let even= arr.filter(item => item %2 == 0);
console.log(even); 

//Задание 15
console.log("\n Задание 15");
arr = [];
for (let i = 0; i < 6; i++) {
  arr.push(Math.floor(Math.random() * 10 + 1));
}
console.log(arr);
let arithmetic=arr.reduce((prev, item) => prev + item) / arr.length;
console.log(arithmetic);