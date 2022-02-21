// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById(`content`);
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById(`rules`);
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
let contentChange = document.getElementById(`content`);
contentChange.innerText = `Hello world`;

// -- замініть текст параграфа з id 'rules' на будь-який інший
let rulesChange = document.getElementById(`rules`);
rulesChange.innerText = `Everything's going to be great`;

// -- змініть кожному елементу колір фону на червоний
let backgroundChange = document.body.children;
for (const item of backgroundChange) {
    item.style.background = `red`;
}

// -- змініть кожному елементу колір тексту на синій
let colorChange = document.body.children;
for (const item of colorChange) {
    item.style.color = `cornflowerblue`;
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClasses = document.getElementById(`rules`);
console.log(rulesClasses.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rulesColorChange = document.getElementsByClassName(`fc_rules`);
for (const item of fc_rulesColorChange) {
    item.style.color = `darkred`;
}
