// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// let str1 = 'hello';
// let str2 = 'owu';
// let str3 = 'com';
// let str4 = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let num7 = 16;
// let bool1 = true;
// let bool2 = false;
//
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
//
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);
//
// console.log(bool1);
// console.log(bool2);
//
// document.write(str1);
// document.write(str2);
// document.write(str3);
// document.write(str4);
//
// document.write(num1);
// document.write(num2);
// document.write(num3);
// document.write(num4);
// document.write(num5);
// document.write(num6);
// document.write(num7);
//
// document.write(bool1)
// document.write(bool2)
//
// alert(str1);
// alert(str2);
// alert(str3);
// alert(str4);
//
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(num7);
//
// alert(bool1);
// alert(bool2);
//
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let str1 = 'hi';
// let str2 = 'okten';
// let str3 = 'org';
// let str4 = 'net';
//
// let num1 = 2;
// let num2 = 11;
// let num3 = -888;
// let num4 = 234;
// let num5 = 14.3;
// let num6 = 7.2;
// let num7 = 61;
//
// let bool1 = false;
// let bool2 = true;
//
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
//
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);
//
// console.log(bool1);
// console.log(bool2);
//
// document.write(str1);
// document.write(str2);
// document.write(str3);
// document.write(str4);
//
// document.write(num1);
// document.write(num2);
// document.write(num3);
// document.write(num4);
// document.write(num5);
// document.write(num6);
// document.write(num7);
//
// document.write(bool1)
// document.write(bool2)
//
// alert(str1);
// alert(str2);
// alert(str3);
// alert(str4);
//
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(num7);
//
// alert(bool1);
// alert(bool2);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//
// let firstName = 'Андрій';
// let middleName = 'Іванович';
// let lastName = 'Масний';
//
// let person = `${lastName} ${firstName} ${middleName}`;
// console.log(person);
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// let name = prompt(`Твоє ім'я?`);
// let fathersName = prompt(`Твоє по-батькові?`);
// let age = prompt(`Твій вік?`);
//
// let message = `Вітаю ${name} ${fathersName}. Тобі ${age} років`;
// console.log(message);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
//
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 < 10);
// console.log(10 !== 10);
// console.log(10 > 10);
// console.log(123 === '123');
// console.log(123 == '123');
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>"); /*205 - бо якщо до стрінги додати число, то все стає стрнгою, стрінга заражає все як Омікрон*/
document.write(str - a + "<br/>"); /*15 - з відніманням так не працює, JS дивна штука*/
document.write(str * "2" + "<br/>"); /*40 - з моноженням теж*/
document.write(str / 2 + "<br/>"); /*10 - і теж з діленням*/
