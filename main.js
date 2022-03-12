// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

for (const user of users) {
    let singleUserWrapper = document.createElement(`div`);
    let singleUser = document.createElement(`div`);
    let {name, age, status} = user;
    singleUser.innerText = `
    User's name - ${name}
    Age is ${age}
    Status is ${status}`;

    let btn = document.createElement(`button`);
    btn.innerText = `Add to favorites`;

    btn.onclick = () => {
        let favoritesKey = `favorites`;
        let favoritesArr = JSON.parse(localStorage.getItem(favoritesKey)) || [];
        favoritesArr.push(user);
        localStorage.setItem(favoritesKey, JSON.stringify(favoritesArr));
    }

    singleUserWrapper.append(singleUser, btn);
    document.body.append(singleUserWrapper);
}

