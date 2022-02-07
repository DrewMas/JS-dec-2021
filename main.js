//
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let num1 = +prompt(`Enter the first number`);
// let num2 = +prompt(`Enter the second number`);
//
// if (num1 > num2) {
//     console.log(`Number 1 - ${num1} is bigger than NUmber 2 -${num2}`);
// } else if (num1 < num2) {
//     console.log(`Number 2 - ${num2} is bigger then Number 1 - ${num1}`);
// } else if (num1 === num2) {
//     console.log(`The numbers are equal: ${num1} = ${num2}`);
// } else {
//     console.log(`Something went wrong`);
// }
//
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let apart = +prompt(`Введіть номер квартири`);
// if (apart >0 && apart<= 20) {
//     console.log(`Квартира №${apart} знаходиться в 1 під'їзді`);
// } else if (apart > 20 && apart <= 48) {
//     console.log(`Квартира №${apart} знаходиться в 2 під'їзді`);
// } else if (apart > 48 && apart <= 96){
//     console.log(`Квартира №${apart} знаходиться в 3 під'їзді`);
// } else {
//     console.log(`Здається, ви помилились будинком`);
// }
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
//
// let number = +prompt(`Enter a number`);
//
// console.log(number === 10 ? `true` : `false`);
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
// let x = 1;
// if (typeof x === `number`) {
//     console.log(`1 - it's a number`);
// } else if (typeof x === 'string') {
//     console.log(`2 - it's a string`);
// } else if (typeof x === `object` || x === `array`) {
//     console.log(`3 - it's object`);
// } else {
//     console.log(`Something went wrong`);
// }
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temp = +prompt(`Яка зараз температура?`);
// if (temp >= 10 && temp <= 22) {
//     console.log(`Ми йдемо вчитись`);
// } else {
//     console.log(`Вчимось офлайн`);
// }
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
// let number = +prompt(`Enter a number form 1 to 5`);
//
// switch (number) {
//     case 1:
//         console.log(`You won an auto`);
//         break;
//     case 3:
//         console.log(`You won a motorbike`);
//         break;
//     case 5:
//         console.log(`You won an iPhone`);
//         break;
//     default:
//         console.log(`Try next time`);
// }

