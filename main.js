// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.querySelector(`#main_header`).classList.add(`dec-2021`);

// b) робить шириниу елементу ul 400px
document.querySelector(`ul`).style.width = `400px`;

// c) робить шириниу всіх елементів з класом linkList шириною 50%
document.querySelectorAll(`.linkList`).forEach(value => value.style.width = `50%`);

// d) отримує текст який зберігається в елементі з класом listElement2
console.log(document.querySelector(`.listElement2`).innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
document.querySelectorAll(`li`).forEach(value => value.style.background = `grey`);

// f) отримує всі елементи 'a' та додає їм клас anchor
document.querySelectorAll(`a`).forEach(value => value.classList.add(`anchor`));

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
document.querySelectorAll(`a`).forEach(value => {
    if (value.innerText === `link3`) {
        value.style.fontSize = `40px`;
    }
})

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
document.querySelectorAll(`a`).forEach(value => value.classList.add(`element_${value.innerText}`));

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// document.querySelectorAll(`.sub-header`).forEach(value => value.style.background = prompt(`Enter the background color`));

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// document.querySelectorAll(`.sub-header`).forEach(value => value.innerText === `content 2 segment` ? value.style.color = prompt(`The the text color`) : ``);

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// document.querySelectorAll(`.content_1`).forEach(value => value.innerText = prompt(`Enter some text`));

// l) отримати елементи p та змінити їм padding на 20px
document.querySelectorAll(`p`).forEach(value => value.style.padding = `20px`);

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
document.querySelectorAll(`.text2`).forEach(value => value.innerText = `dec-2021`);
//
