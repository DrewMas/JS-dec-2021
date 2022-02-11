// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let theLowestNumber = (...num) => {
    let min = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
    }
    return min;
}
console.log(theLowestNumber(8, 25, 1));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let theHighestNumber = (...num) => {
    let max = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
console.log(theHighestNumber(8, 25, 1));
// - створити функцію яка повертає найбільше число з масиву
let theLowestArrNumber = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(theLowestArrNumber([5, 2, 4, 6, 8, 3, 5, 7]));
// - створити функцію яка повертає найменьше число з масиву
let theHighestArrNumber = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(theHighestArrNumber([5, 2, 4, 6, 8, 3, 5, 7]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(arrSum([1, 2, 10]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averageNumber = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i] / arr.length;
    }
    return num;
}
console.log(averageNumber([5, 2, 4, 6, 8, 3, 5, 7]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxMin = (...num) => {
    let min = num[0];
    let max = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        } else if (num[i] > max) {
            max = num[i];
        }
    }
    console.log(max);
    return min;
}
console.log(maxMin(5, 2, 4, 6, 8, 3, 5, 7));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let fillArrWithRandomNumbers = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
console.log(fillArrWithRandomNumbers());
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let fillArrWithRandomNumberWithLimit = (limit) => {
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
console.log(fillArrWithRandomNumberWithLimit(10));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArr = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArr([1, 2, 3]));
