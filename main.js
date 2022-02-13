// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string = ['hello world', 'lorem ipsum', 'javascript is cool'];
// string.forEach(value => console.log(value.length))
//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let capitalize = ['hello world', 'lorem ipsum', 'javascript is cool'];
// capitalize.forEach(value => console.log(value.toUpperCase()));
//
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let toLowerCase = [`HELLO WORLD`, `LOREM IPSUM`, `JAVASCRIPT IS COOL`];
//     toLowerCase.forEach(value => console.log(value.toLowerCase()))
//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
// let stringToArray = (str) => console.log(str.split(` `));
// stringToArray(str);
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters = (str, end) => str.substring(0, end);
//
// console.log(delete_characters('Каждый охотник желает знать', 7));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     return str.replaceAll(' ','-').toUpperCase();
// }
// console.log(insert_dash(str));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let capitalLetter = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalLetter(`hello world`));
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str = `hello world`;
let capitalize = (str) => str.split(` `).map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(` `);

console.log(capitalize(str));
