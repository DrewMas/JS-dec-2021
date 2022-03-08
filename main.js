let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let newArr = [];
for (const user of users) {
    newArr.push(user.address);
}
console.log(newArr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let item = document.createElement(`div`);
//     let {name, age, status, address: {city, country, street, houseNumber}} = user;
//     item.innerHTML = `
//     <h2>Name: ${name}</h2>
//     <p>Age: ${age}</p>
//     <p>Status: ${status}</p>
//     <h3>Address:</h3>
//         <p>Country: ${country}</p>
//         <p>City: ${city}</p>
//         <p>Street: ${street}</p>
//         <p>Building: ${houseNumber}</p>`;
//
//     document.body.append(item);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let divka = document.createElement(`div`);
//     for (const el in user) {
//         let divochka = document.createElement(`div`);
//         if (typeof user[el] === `object`) {
//             divochka.innerText = JSON.stringify(user[el]);
//         } else {
//             divochka.innerText = `${el} - ${user[el]}`;
//         }
//         divka.append(divochka);
//     }
//     document.body.append(divka);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// for (const user of users) {
//     let divka = document.createElement(`div`);
//
//     let boxCreator = (user, divka) => {
//         for (const el in user) {
//             let divochka = document.createElement(`div`);
//             divochka.innerText = `${el} - ${user[el]}`;
//             divochka.style.margin = `30px`;
//             divka.append(divochka);
//             if (typeof user[el] === `object`){
//                 divochka.innerText = `${el}:`;
//                 boxCreator(user[el], divochka);
//             }
//         }
//     }
//     boxCreator(user, divka);
//     document.body.append(divka);
// }
//
//
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
let all_h2 = document.getElementsByTagName(`h2`);
let h1 = document.getElementsByTagName(`h1`)[0];
let tagsList = document.createElement(`ul`);
let content = document.getElementById(`content`);

for (const h2 of all_h2) {
    console.log(h2.innerText);
    let listItem = document.createElement(`li`);
    listItem.innerText = h2.innerText;

    tagsList.append(listItem);
}

content.append(h1, tagsList);


//
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let wrap = document.createElement(`div`);
wrap.classList.add(`wrap`);

for (const rule of rules) {
    let singleRule = document.createElement(`div`);
    for (const el in rule) {
        if (el === `title`) {
            let ruleTitle = document.createElement(`h3`);
            ruleTitle.innerText = `${rule[el]}`;
            singleRule.append(ruleTitle);
        } else if (el === `body`) {
            let ruleBody = document.createElement(`div`);
            ruleBody.innerText = `${rule[el]}`;
            singleRule.append(ruleBody);
        }
    }
    wrap.append(singleRule);
}

document.body.append(wrap);
