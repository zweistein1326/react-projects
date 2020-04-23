//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
}

console.log(add(2, 3, 199));

//this keyword - no longer bound with arrow functions

// const user = {
//     name: 'Siddharth',
//     cities: ['Delhi', 'Hong Kong', 'Schwabisch Hall'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
console.log(multiplier.multiply());