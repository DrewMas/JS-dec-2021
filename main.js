// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

const postsBox = document.getElementsByClassName(`posts`)[0];

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => value.map(value => {
        let {id, title, body} = value;
        let singlePost = document.createElement(`div`);
        singlePost.innerText = `${id} - Title: ${title}
        Body - ${body}`;
        singlePost.classList.add(`singlePost`);

        let btnBox = document.createElement(`div`);
        let btn = document.createElement(`button`);
        btn.innerText = `All comments`;

        btn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(data => data.json())
                .then(data => data.map(data => {
                    let comments = document.createElement(`div`);
                    let {id, name, email, body} = data;
                    comments.innerText = `${id} - ${name}
                            Email - ${email}
                            Body - ${body}`
                    singlePost.append(comments);
                }))
        }
        btnBox.append(btn);
        singlePost.append(btnBox);
        postsBox.append(singlePost);
    }));
