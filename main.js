// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
class User {
    constructor(id, name, userName, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address = {street, suite, city, zipcode, geo: {lat, lng}};
        this.phone = phone;
        this.website = website;
        this.company = {name: companyName, catchPhrase, bs};
    }
}

let user = new User(
    1,
    'Leanne Graham',
    'Bret',
    `Sincere@april.biz`,
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets'
);
console.log(user);

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(name, description, attributeName1, attributeDescription1, attributeName2, attributeDescription2) {
        this.name = name;
        this.description = description;
        this.attributes = attributeName2 ? [{titleOfAttr: attributeName1, attributeDescription: attributeDescription1},
            {titleOfAttr: attributeName2, attributeDescription: attributeDescription2}] : {
            titleOfAttr: attributeName1,
            attributeDescription: attributeDescription1
        };
    }
}

let a = new Tag(
    `<a>`,
    `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок`,
    `href`,
    `Задает адрес документа, на который следует перейти`,
    `target`,
    `Имя окна или фрейма, куда браузер будет загружать документ`
);

let div = new Tag(
    `<div>`,
    `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого`,
    `align`,
    `Задает выравнивание содержимого тега <div>`,
    `title`,
    `Добавляет всплывающую подсказку к содержимому`);

let h1 = new Tag(
    `<h1>`,
    `Тег <h1> представляет собой наиболее важный заголовок первого уровня`,
    `align`,
    `Определяет выравнивание заголовка`
);

let span = new Tag(
    `<span>`,
    `Тег <span> предназначен для определения строчных элементов документа`,
    `class`,
    `Определяет имя класса, которое позволяет связать тег со стилевым оформлением`,
    `id`,
    `Указывает имя стилевого идентификатора`
);

let input = new Tag(
    `<input>`,
    `Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков`,
    `name`,
    `Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать`,
    `value`,
    `Значение элемента`
);

let form = new Tag(
    `<form>`,
    `Тег <form> устанавливает форму на веб-странице`,
    `action`,
    `Адрес программы или документа, который обрабатывает данные формы`,
    `name`,
    `Имя формы`
);

let option = new Tag(
    `<option>`,
    `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,
    `selected`,
    `Заранее устанавливает определенный пункт списка выделенным`,
    `value`,
    `Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов`
)

let select = new Tag(
    `<select>`,
    `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее`,
    `name`,
    `Имя элемента для отправки на сервер или обращения через скрипты`,
    `disabled`,
    `Блокирует доступ и изменение элемента`
);

console.log(a, div, h1, span, input, form, select);

