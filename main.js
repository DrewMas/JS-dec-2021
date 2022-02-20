// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user = [];
for (let i = 0; i < 10; i++) {
    user.push(new User(`${i}`, `name ${i}`, `surname ${i}`, `user${i}@gmail.com`, `063123121${i}`));
}
console.log(user);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(user.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(user.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.emai = email;
        this.phone = phone;
        this.order = order;
    }

}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];

let client1 = new Client(1, `Bart`, `Simpson`, `bart.simpson@gmaol.com`, 123 - 11 - 11 - 11, [`sandwich, cola`]);
let client2 = new Client(2, `Homer`, `Simpson`, `homer.simpson@gmail.com`, 123 - 22 - 22 - 22, [`beer`, `chips`]);
let client3 = new Client(3, `Marge`, `Simpson`, `marge.simpson@gmail.com`, 123 - 33 - 33 - 33, [`bread`, `eggs`, `milk`, `fruits`, `vegetables`]);
let client4 = new Client(4, `Lisa`, `Simpson`, `lisa.simpson@gmail.com`, 123 - 44 - 44 - 44, [`juice`, `cereal`, `apple`]);
let client5 = new Client(5, `Meggie`, `Simpson`, `meggie.simpson@gmail.com`, 123 - 55 - 55 - 55, [`milk`]);
let client6 = new Client(6, `Abe`, `Simpson`, `abe.simpson@gmail.com`, 123-66-66-66, [`tea`,`bread`]);
let client7 = new Client(7, `Apu`, `Nahasapeemapetilon`, `apu.nahasapeemapetilon@gmail.com`, 123-77-77-77, [`something cosher`]);
let client8 = new Client(8, `Ned`, `Flanders`, `ned.flanders@gmail.com`, 123-88-88-88, [`coffee`, `milk`, `meat`, `fish`]);
let client9 = new Client(9, `Krusty`, `The Clown`, `krusty.theclown@gmail.com`, 123-99-99-99, [`whiskey`, `rum`,`vodka`, `tequila`, `gin`]);
let client10 = new Client(10, `Lenny`, `Leonard`, `lenny.leonard@gmail.com`, 123-10-10-10, [`beer`, `chips`, `nuts`] );

let clientsArr = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientsArr.sort((a, b) => a.order.length - b.order.length));

// function userCreate(name, age) {
//     let obj = {name: name, age: age}
//     return {
//         getName: function () {
//             return obj.name
//         },
//         getAge: function () {
//             return obj.age
//         },
//         setAge: function (age) {
//             if (age < 0 || age < obj.age) {
//                 alert(`Something went wrong`);
//             } else {
//                 obj.age = age;
//             }
//         }
//     }
// }
//
// let manipulator = userCreate(`vasya`, 30);
//
// console.log(userCreate(`petya`, 32).getAge());
// manipulator.setAge(35);
// console.log(manipulator.getAge());
