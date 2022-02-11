// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// let logNumber = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// logNumber(10);
//
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
// let numFromTo = (a, b) => {
//     if (a < b) {
//         for (let i = a; a <= b; a++) {
//             console.log(a);
//         }
//     } else if (a > b) {
//         for (let i = a - 1; a >= b; a--) {
//             console.log(a);
//         }
//     } else {
//         console.log(`You've entered equal numbers - ${a} = ${b}`);
//     }
// }
// numFromTo(10, 1);
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let numShift = (arr, i) => {
//     for (let j = 0; j < arr.length; j++) {
//         let num = arr[j];
//         if (i === j) {
//             arr[j] = arr[j + 1];
//             arr[j + 1] = num;
//         }
//     }
//     console.log(arr);
// }
// numShift([9, 8, 0, 4], 0);
// numShift([9, 8, 0, 4], 1);
// numShift([9, 8, 0, 4], 2);
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let sendZerosToTheEnd = (arr) => {
    let zeros = [];
    let numbers = [];
    for (const el of arr) {
        el === 0 ? zeros.push(el) : numbers.push(el);
    }
    console.log([...numbers, ...zeros]);
}
sendZerosToTheEnd([1, 0, 6, 0, 3]);
sendZerosToTheEnd([0, 1, 2, 3, 4]);
sendZerosToTheEnd([0, 0, 1, 0]);

