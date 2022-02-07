
// --створити масив з:
// - з 5 числових значень
// let numArr = [1,2,3,4,5];
// console.log(numArr);
// - з 5 стічкових значень
// let stringArr = ['okten', `owu`, `JS`, `Noda`, `react`]
// console.log(stringArr);
// - з 5 значень стрічкового, числового та булевого типу
// let arr = [true, 1, `ua`, 2, false];
// console.log(arr);
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let emptyArr = [];
// emptyArr[0] = 13;
// emptyArr[1] = 'net';
// emptyArr[2] = true;
// emptyArr[3] = false;
// emptyArr[4] = 1;
// console.log(emptyArr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Number ${i+1}</div>`)
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Index is ${i}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i <= 20){
//     document.write(`<h1>Random text</h1>`)
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i <= 20){
//     document.write(`<h1>Index is ${i}</h1>`)
//     i++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (const number of arr) {
//     console.log(number);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [`I`, `am`, `doing`, `the`,`third`,`JS`,`home`, `work`, `tree`, `more`, `words`];
// for (const string of arr) {
//     console.log(string);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, true, false, null, NaN, `word`, `word`, `word`];
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [true, `one`, false, `two`, `three`, false, `four`, true, `five`, `six`];
// for (const arrElement of arr) {
//     if (typeof arrElement === `boolean`){
//         console.log(arrElement);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [1,true, 2, 3, false, 4, true, 5, false, 6];
// for (const arrElement of arr) {
//     if (typeof arrElement === `number`){
//         console.log(arrElement);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = [1, 2, 3, true, false, null, `word`, `word2`, `word3`,4];
// for (const arrElement of arr) {
//     if (typeof arrElement === `string`) {
//         console.log(arrElement);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let emptyArr = [];
// emptyArr[0] = 13;
// emptyArr[1] = 'net';
// emptyArr[2] = true;
// emptyArr[3] = false;
// emptyArr[4] = 1;
// emptyArr[5] = NaN;
// emptyArr[6] = 2;
// emptyArr[7] = null;
// emptyArr[8] = undefined;
// emptyArr[9] = true;
//
// for (const emptyArrElement of emptyArr) {
//     console.log(emptyArrElement);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>The index is ${i}</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>The index is - ${i}</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<div>The index is - ${i}</div>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//    if (i%2 === 0){
//        console.log(i);
//        document.write(`<div>The index is - ${i}</div>`)
//    }
// }
