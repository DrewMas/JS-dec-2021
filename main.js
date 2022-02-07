/*********************ADDITIONAL**************************/

// 1. Створити пустий масив та :
// let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     if (i%2===0){
//         arr.push(i);
//     }
// }
// console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 1) {
//         arr.push(i);
//     }
// }
// console.log(arr);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random()*100));
// }
// console.log(arr);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 732) + 8);
// }
// console.log(arr);
//
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < arr.length; i+=3) {
//     console.log(arr[i]);
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < arr.length; i+=3) {
//     if (!(arr[i]%2)){
//         console.log(arr[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 0; i < arr.length; i += 3) {
//     if (!(arr[i] % 2)) {
//         console.log(arr[i]);
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] % 2)) {
//         console.log(arr[i - 1]);
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (const number of arr) {
//     sum += number/arr.length;
// }
// console.log(sum);
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let newArr= [];
//
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random()*20));
// }
// for (const arrElement of arr) {
//     newArr.push(arrElement * 5);
// }
// console.log(arr);
// console.log(newArr);
//
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// let arr = [`new`,`old`, 1, `okten`,5,6,`ua`,0, `uk`];
// let newArr = [];
// for (const arrElement of arr) {
//     if (typeof arrElement === `number`){
//         newArr.push(arrElement);
//     }
// }
// console.log(newArr);
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id){
//             usersWithId[i].address = citiesWithId[j];
//             usersWithCities.push(usersWithId[i]);
//         }
//     }
// }
// console.log(usersWithCities);
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (const number of arr) {
//     if (!(number%2)){
//         console.log(number);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// let newArr = [];
// for (const item of arr) {
//     newArr.push(item);
// }
// console.log(newArr);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// while (i < arr.length) {
//     newArr.push(arr[i]);
//     i++;
// }
// console.log(newArr);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (const item of arr) {
//     newArr.push(item)
// }
// console.log(newArr);
