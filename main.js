// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function fightClubClasses(body) {
    let classesArr = [];
    for (const child of body.children) {
        if (child.classList) {
            child.classList.forEach(value => {
                classesArr.includes(value) ? `` : classesArr.push(value);
            });
        }
        fightClubClasses(child);
    }
    classesArr.length ? console.log(classesArr) : ``;
}
fightClubClasses(document.body);
