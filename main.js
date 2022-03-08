// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let block = document.createElement(`div`);
// block.classList.add(`wrap`, `collapse`, `alpha`, `beta`);
// block.style.width = `200px`;
// block.style.height = `200px`;
// block.style.margin = `10px`;
// block.style.background = `cornflowerblue`;
//
// let blockClone = block.cloneNode(true);
//
// document.body.append(block,blockClone);
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menuBtn = ['Main','Products','About us','Contacts'];

let menu = document.body.children[0];

for (const item of menuBtn) {
    let menuItem = document.createElement(`li`);

    menuItem.append(item);
    menu.append(menuItem);
}
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let arrEl = document.createElement(`div`);
    arrEl.innerText = `The title is - ${item.title}, duration - ${item.monthDuration}`;

    document.body.append(arrEl);
}
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let div = document.createElement(`div`);
    div.classList.add(`item`);
    for (const itemKey in item) {
        if (itemKey === `title`) {
            let h2 = document.createElement(`h2`);
            h2.innerText = `${item[itemKey]}`;
            h2.classList.add(`heading`);
            div.append(h2);
        } else if(itemKey === `monthDuration`) {
            let p = document.createElement(`p`);
            p.innerText = `${itemKey} - ${item[itemKey]}`;
            p.classList.add(`description`)
            div.append(p);
        }
    }
    document.body.append(div);
}

//Зробив з h2, так як h1 повинен тільки 1 бути на сторінці
