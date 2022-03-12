let favoritesArr = JSON.parse(localStorage.getItem(`favorites`)) || [];

for (const {name, age, status} of favoritesArr) {

    let favoriteUser = document.createElement(`div`);
    favoriteUser.innerText = `
    User's name - ${name}
    Age is ${age}
    Status is ${status}`

    document.body.append(favoriteUser);
}

