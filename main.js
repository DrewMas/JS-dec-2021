// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let postsBlock = document.getElementsByClassName(`posts`)[0];

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => value.map(value => {
        let singePost = document.createElement(`div`);
        singePost.innerText = `${value.id} - ${value.title} - ${value.body}`;
        singePost.classList.add(`post`);

        postsBlock.append(singePost);
    }));
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsBlock = document.getElementsByClassName(`comments`)[0];

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(value => value.map(value => {
        let singleComment = document.createElement(`div`);
        singleComment.classList.add(`singleComment`);

        for (const valueEl in value) {
            let commentEl = document.createElement(`div`);
            commentEl.innerText = `${valueEl} - ${value[valueEl]}`;
            singleComment.append(commentEl);
        }
        commentsBlock.append(singleComment);
    }));
