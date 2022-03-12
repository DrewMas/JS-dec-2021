// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
let btn = document.getElementById(`btn`).onclick = () => {
    document.getElementById(`text`).hidden = true;
}
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
let btn2 = document.getElementById(`btn2`);
btn2.onclick = () => btn2.style.display = `none`;

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let btn3 = document.getElementById(`btn3`).onclick = () => {
    let inputAge = document.getElementById(`age`).value;
    console.log(inputAge);
    if (!inputAge) {
        alert(`You haven't entered anything`);
    } else if (inputAge < 18) {
        alert(`You're under 18`)
    } else {
        alert(`Congrats, you're an adult. Life sucks - you're gonna love it`);
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
//
let title = document.getElementById(`title`).onclick = () => {
    let list = document.getElementById(`list`);
    list.hidden = list.hidden === false;

    // if (list.hidden === false) {
    //     list.hidden = true;
    // } else {
    //     list.hidden = false;
    // } я зробив так, але IDE запропонувала simplify, але я не дуже розумію як це працює
}

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const comments = [
    {
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    },
    {
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    }
];

for (const comment of comments) {
    let singleComment = document.createElement(`div`);
    let button = document.createElement(`button`);
    let h3 = document.createElement(`h3`);
    let p = document.createElement(`p`);
    button.innerText = `Hide`;

    let {title, body} = comment;
    h3.innerText = `${title}`;
    p.innerText = `${body}`;

    button.onclick = () => {
        p.hidden = p.hidden ===false;
    }

    singleComment.append(h3, p, button);
    document.body.append(singleComment)
}
