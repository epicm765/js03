// 'use strict';

// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax 
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const epic = {name: 'epic', age: 26};
print(epic);

// with JavaScript magic (dynamically typed language)
// can add properties later
epic.hasJob = true;
console.log(epic.hasJob);

// can be delete properties later
delete epic.hasJob;
console.log(epic.hasJob);

// 2. Computed properties
// key should be always string
console.log(epic.name);
console.log(epic['name']);
epic['hasJob'] = true;
console.log(epic.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(epic, 'name');
printValue(epic, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('epic', 26);
// const person4 = makePerson('epic', 26);
console.log(person4);

// function makePerson(name.age) {
//     return {
//         name,
//         age,
//     };
// }

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : property existence check (key in obj)
console.log('name' in epic);
console.log('age' in epic);
console.log('random' in epic);
console.log(epic.random)

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in epic) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'epic', age: '26'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color : 'red'};
const fruit2 = { color : 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에있는 property가 앞에 있는것을 덮어씌움
console.log(mixed.color); // blue
console.log(mixed.size); // big