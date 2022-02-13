// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normalizer = (name) => name
    .replaceAll(`.`, ` `)
    .replaceAll(`-`, ` `)
    .replaceAll(`_`, ` `)
    .replaceAll(`   `, ` `)
    .replaceAll(`  `, ` `);
console.log(normalizer(n1));
console.log(normalizer(n2));
console.log(normalizer(n3));
//
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
console.log(random(100));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortAscend = random(10).sort((a, b) => a - b);
console.log(sortAscend);

let sortDescend = random(10).sort((a, b) => b - a);
console.log(sortDescend);
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filterEqual = sortAscend.filter(value => !(value % 2));
console.log(filterEqual);
//
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrToStr = random(10).map(value => value + '');
console.log(arrToStr);
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    switch (direction) {
        case `ascending`:
            arr.sort((a, b) => a - b);
            break;
        case `descending`:
            arr.sort((a, b) => b - a);
            break;
        default:
            console.log(`something went wrong`);
    }
    return arr;
}
console.log(sortNums([11, 21, 3], `ascending`));
console.log(sortNums([11, 21, 3], `descending`));
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
