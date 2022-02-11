// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let rectangleSquare = (a, b) => a * b;
// console.log(rectangleSquare(2, 3));
// - створити функцію яка обчислює та повертає площу кола
// let circleSquare = (r) => Math.PI * Math.pow(r, 2);
// console.log(circleSquare(3));
// - створити функцію яка обчислює та повертає площу циліндру
// let sC = (h, r) => 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
// console.log(sC(5, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let logArr = (arr) => {
//     for (const el of arr) {
//         console.log(el);
//     }
// }
// logArr([1, 2, 3, 4, 5]);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let addParagraph = (text) =>{
//     document.write(`<p>${text}</p>`);
// }
// addParagraph(`Hello World`);
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let createList = (text)=> {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createList(`Hello World`);
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let createList = (text, number) =>{
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createList(`Hello World`,10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let createList = (arr)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`)
// }
// createList([1,2,3,true,false, `Hello`, `World`]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let func = (arr) => {
//     for (const item of arr) {
//         document.write(`<div>`);
//         for (const key in item) {
//             document.write(`<p>${key} - ${item[key]}</p>`)
//         }
//         document.write(`</div>`);
//     }
// }
// func([
//     {
//         id: 1,
//         name: `Vasya`,
//         age: 30
//     },
//     {
//         id: 2,
//         name: `Petya`,
//         age: 25
//     },
//     {
//         id: 3,
//         name: `Katya`,
//         age: 18
//     }
// ]);
