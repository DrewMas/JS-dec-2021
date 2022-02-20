//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, manufacturer,year,topSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.topSpeed = topSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
//     };
//
//     this.info = function () {
//             console.log(`
//             Manufacturer is - ${this.manufacturer}
//             Model is ${this.model}
//             Production year is = ${this.year}
//             Top speed is ${this.topSpeed} km/h
//             Engine capacity is ${this.engineCapacity} liters`);
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.topSpeed += newSpeed;
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car(`Corvette`, `Chevrolet`, 1957, 214, 3.9 );
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.drive();
// car.changeYear(1960);
// car.info();
// car.addDriver({name:`Steve`, lastName: `McQueen`});
// console.log(car);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturerCountry, year, topSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturerCountry = manufacturerCountry;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.topSpeed} km/h`);
//     };
//
//     info() {
//         console.log(`
//         Manufacturer country in ${this.manufacturerCountry}
//         Model is ${this.model}
//         Production year is ${this.year}
//         Top speed is ${this.topSpeed}
//         Engine capasity is ${this.engineCapasity}`)
//     };
//     increaseMaxSpeed(newSpeed) {
//         this.topSpeed += newSpeed;
//     };
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car(`Jaguar E-type`,`Great Britain`, 1971, 241, 4.2);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.info();
// car.changeYear(1973);
// car.info();
// car.addDriver({name: `Steve`, lastName: `McQueen`});
// console.log(car);
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellasArr = [
    new Cinderella(`Anna`, 24, 37),
    new Cinderella(`Vika`, 19, 38),
    new Cinderella(`Diana`, 27, 39),
    new Cinderella(`Katya`, 25, 37),
    new Cinderella(`Tanya`, 26, 40),
    new Cinderella(`Christina`, 24, 41),
    new Cinderella(`Olya`, 21, 36),
    new Cinderella(`Valya`, 22, 38),
    new Cinderella(`Oksana`, 20, 39),
    new Cinderella(`Yulia`, 23, 40)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Price {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let price = new Price(`Petya`, 30, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < cinderellasArr.length; i++) {
    if (cinderellasArr[i].footSize === price.shoeSize) {

        console.log(`Hey, ${price.name}, you were looking for ${cinderellasArr[i].name}`);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellasArr.find(value => value.footSize === price.shoeSize)
console.log(`Your Cinderellas is ${JSON.stringify(findCinderella.name)}`);
