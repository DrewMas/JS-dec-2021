// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
let func = (...ar) => {
    let res = null;
    for (const el of ar) {
        res += el;
    }
    console.log(res);
}
func(1, `aa`);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
let func2 = (arr1, arr2) => {
    let resArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                resArr.push(arr1[i] + arr2[j])
            }
        }
    }
    return resArr;
}
console.log(func2([1, 2, 3, 4], [2, 3, 4, 5]));

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
let findArrKeys = (arr) => {
    let keyArr = [];
    for (const el of arr) {
        for (const key in el) {
            keyArr.push(key);
        }
    }
    return keyArr;
}
console.log(findArrKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let findArrValues = (arr) => {
    let valueArr = [];
    for (const el of arr) {
        for (const key in el) {
            valueArr.push(el[key]);
        }
    }
    return valueArr;
}
console.log(findArrValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));
