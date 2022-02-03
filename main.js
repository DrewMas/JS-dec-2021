// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = Math.round(Math.random()*60)
// if (time < 15) {
//     console.log(`Число ${time} належить до першої чверті`);
// }
// if (time >=15 && time < 30) {
//     console.log(`Число ${time} належить до другої чверті`);
// }
// if (time >= 30 && time < 45) {
//     console.log(`Число ${time} належить до третьої чверті`);
// }
// if (time >= 45) {
//     console.log(`Число ${time} належить до четвертої чверті`);
// }
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let min = 1;
// let max = 31;
// let day = Math.floor(Math.random()*max)+min;
//
// if (day < 11) {
//     console.log(`${day} число належить до 1 декади місяця`);
// }
// if (day >= 11 && day < 21){
//     console.log(`${day} число належить до 2 декади місяця`);
// }
// if (day >= 21) {
//     console.log(`${day} число належить до 3 декади місяця`);
// }
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = confirm(`Is it true?`);
//
// console.log(test ? `true` : `false`);
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a1 = 1;
// let a2 = 0;
// let a3 = -3;
//
// console.log(a1 !== 0 ? `true` : `false`);
// console.log(a2 !== 0 ? `true` : `false`);
// console.log(a3 !== 0 ? `true` : `false`);
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// let day = prompt(`Please, enter the day sequence number`);
//
// switch (day) {
//     case `1`:
//         console.log(`Congrats, loser, the week has just starter. It's Monday`);
//         break;
//     case `2`:
//         console.log(`It's Tuesday, so get back to work`);
//         break;
//     case `3`:
//         console.log(`Wednesday, it's a new Friday, they said, but meh, it's the hump of the week`);
//         break;
//     case `4`:
//         console.log(`Yep, pretty close to the weekend, isn't it? It's Thursday, baby`);
//         break;
//     case `5`:
//         console.log(`Ready, steady, go...it's Friday`);
//         break;
//     case `6`:
//         console.log(`Tonight, we are young, so let's set the world on fire, we can burn brighter than the sun - Have fun, it's Saturday`);
//         break;
//     case `7`:
//         console.log(`Probably you've got a hangover, but this is not the only bad news. It's Sunday, which means - tomorrow's work. Use this day with wisdom`);
//         break;
//     default:
//         console.log(`Either we've run out the days, or you've written some kind of a bullshit`);
// }
//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// let year = prompt(`Введіть рік для перевірки`);
// console.log(year % 4 === 0 ? `Це високосний рік` : `Це звичайний рік`);
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let question = prompt(`Яка "офіційна назва JavaScript?`);
//
// if (question === `ECMAScript`) {
//     console.log(`Правильно!`);
// } else {
//     console.log(`Не знаєте? ECMAScript!`);
// }
