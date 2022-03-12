// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
let form1 = document.forms.form1;
let form2 = document.forms.form2;
let btn = document.getElementById(`btn`);

btn.onclick = () => {
    console.log(form1.email.value);
    console.log(form1.password.value);
    console.log(form2.name.value);
    console.log(form2.age.value);
}

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.createElement(`table`);
let tableWrapper = document.getElementById(`tableWrapper`);
let createTable = document.getElementById(`createTable`);

createTable.onsubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < createTable.rows.value; i++) {
        let tr = document.createElement(`tr`);
        table.append(tr);
        for (let j = 0; j < createTable.columns.value; j++) {
            let td = document.createElement(`td`);
            td.style.border = `2px solid darkgreen`;
            td.innerText = `${createTable.text.value}`;
            tr.append(td);
        }
    }
}

tableWrapper.append(table);


// (Додатковачастина для завдання)
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
let swearWordsArr = [`срака`, `свиня`, `скотина`, `скотиняка`, `хуйло`];

let form = document.forms.wordsCheckerForm;
let button = document.getElementById(`button`);

let wordsChecker = (swearWordsArr) => {
    form.onsubmit = (e) => {
        e.preventDefault();
        let input = e.target.wordsChecker.value.toLowerCase();
        for (const word of swearWordsArr) {
            if (input === word) {
                alert(`Атата, не кажи слова ${word}`);
                e.target.wordsChecker.value = ``;
            }
        }
        if (e.target.wordsChecker.value) {
            alert(`Молодець, ти чемний!`);
            e.target.wordsChecker.value = ``;
        }
    }

}
wordsChecker(swearWordsArr);

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let wordsChecker = (swearWordsArr) => {
//     form.onsubmit = (e) => {
//         e.preventDefault();
//         let input = e.target.wordsChecker.value.toLowerCase().split(` `);
//         for (const word of swearWordsArr) {
//             for (const item of input) {
//                 if (word === item) {
//                     alert(`Атата, не кажи слова ${word}`);
//                     e.target.wordsChecker.value = ``;
//                 }
//             }
//         }
//         if (e.target.wordsChecker.value) {
//             alert('Молодець, ти чемний!');
//             e.target.wordsChecker.value = ``;
//         }
//
//     }
// }
// wordsChecker(swearWordsArr);
