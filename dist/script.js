"use strict";
// let money = 500;
// money = 200;
// money = 100;
let age;
let myName = "Niam";
const isMarried = true;
age = 24;
console.log(age, myName, isMarried);
// #####If Function return anything#####
function add(num1, num2) {
    return num1 + num2;
}
add(4, 5);
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const user1 = fullName('Ashik', 'Khan');
console.log(user1);
// #####If Function don't return anything#####
function doubleIt(num) {
    // if function don't return anything then use void 
    console.log(num * 2);
}
doubleIt(17);
// #####Arrow Function#####
// const substitution = (num1: number, num2: number): number => num1 - num2;
// console.log(substitution(17,5))
let substitutionType;
substitutionType = (num1, num2) => num1 - num2;
console.log(substitutionType(10, 5));
const ids = [1, 2, 3, 4, 5];
console.log(ids);
// #####Set Type for Array and Object#####
const friendsName = ['abir', 'jalil', 'kabir', 'mohosin', 'momin'];
let biggestName = '';
friendsName.forEach(function (friend) {
    if (friend.length > biggestName.length) {
        biggestName = friend;
    }
});
console.log(biggestName);
let student = {
    name: "akash",
    age: 24
};
console.log(student.name, student.age);
const player1 = {
    club: 'ABC',
    player: "Plado",
    isPlay: true,
    salary: 20000,
    wife: 'Maria'
};
const player2 = {
    club: 'XYZ',
    player: "Fabuna",
    isPlay: false,
    salary: 100000,
};
console.log(player1);
/*
function getBonus(player:{salary:number, age?:number})
{
    return player.salary * 0.1;
}

console.log(getBonus({ salary: 10000 }));

// const poorPlayer = { salary: 10000 }
const poorPlayer = { salary: 10000, age:40 }
console.log(getBonus(poorPlayer));

console.log(getBonus(player1)); //if we don't use ? throw error because player1 don't have age property
*/
function getBonus(player, friends) {
    return player.salary * 0.1;
}
console.log(getBonus(player1, ['abu', 'habu', 'babu']));
// #####Class#####
class Person {
    constructor(name, father) {
        this.name = name;
        this._gfName = name;
        this.father = father;
    }
    getName() {
        return this.name;
    }
}
const person1 = new Person("Abrar", "Mohesh");
person1.name = 'Dan';
console.log(person1.name, person1.father, person1.getName());
// person1.father = 'Desel'; cannot change because readonly
