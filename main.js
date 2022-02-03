//
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = []
let result = 0;


for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
for (const arrElement of arr) {
    result += arrElement;
}

console.log(arr);
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: `Da Vinci Code`,
    pages: 689,
    genre: `mystery thriller novel`
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    name: `The Maze Runner`,
    pages:375,
    genre: `science fiction`,
    author: `James Dasher`
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let booksArr = [
    {
        name: `Da Vinci Code`,
        pages: 689,
        genre: `mystery thriller novel`,
        author: `Dan Brown`
    },
    {
        name: `The Maze Runner`,
        pages:375,
        genre: `science fiction`,
        author: `James Dasher`
    },
    {
        name: `Harry Potter and the Philosopher's Stone`,
        genre: `fantasy novel`,
        pages: 223,
        author: `J.K.Rowling`
    }
]

for (const booksArrElement of booksArr) {
    console.log(booksArrElement);
}

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;

console.log(s = height * width);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;

console.log(v = Math.PI * dC * heightC);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;

console.log(k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2)));
