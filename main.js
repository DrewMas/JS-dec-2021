// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
const userForm = document.forms.userForm;
userForm.onsubmit = (e) => {
    let i = localStorage.length + 1;
    localStorage.setItem(`user${i}`, JSON.stringify({name: e.target.name.value, age: e.target.age.value}));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carsArr = JSON.parse(localStorage.getItem(`car`)) || [];

document.forms.carForm.onsubmit = (e) => {
    carsArr.push({model: e.target.model.value, type: e.target.type.value, volume: e.target.volume.value});
    localStorage.setItem(`car`, JSON.stringify(carsArr));
}


const clean = document.getElementById(`clear`).onclick = () => localStorage.clear();
