'use strict';
// Object-oriented programming
// class: template - 기본적인 틀(데이터x)
// object : instance of a class - 실제로 데이터를 넣어서 만드는 것
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const epic = new Person('epic', 26);
console.log(epic.name)
console.log(epic.age)
epic.speak();

// 2. Getter and setters
// 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // age라는 getter를 정의하는 순간 this.age는 바로 getter를 호출하게 됨
        return this._age; // <- call stack error가 일어나는 것을 방지하기 위해 getter와 setter안에 쓰여지는 변수를 조금 다른 것으로 바꿔줘야함
    }

    set age(value) { // setter를 정의하는 순간 값을 할당할 때 바로 메모리의 값을 할당하는 것이 아니라 setter를 호출하게 됨
        // value에 전달된 값을 this.age에 할당할 때 메모리의 값을 업데이트 하는 것이 아니라 setter를 호출하게 됨
        // 즉 setter를 호출하면 다시 value로 값을 전달하고 다시 setter를 호출하는 무한반복이 일어남 -> Call stack error가 일어남
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age=value <0 ? 0 : value; // <- call stack error가 일어나는 것을 방지하기 위해 getter와 setter안에 쓰여지는 변수를 조금 다른 것으로 바꿔줘야함
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age); // _age라고 설정해두었지만 age로 호출 할 수 있는 이유는 내부적으로 getter와 setter를 사용했기 때문

// 3. Fields (public, private)
// Too soon
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon
class Article {
    static publisher = 'epic coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}
              
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
console.log(triangle.toString());

