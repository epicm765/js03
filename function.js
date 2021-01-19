// Function
// - fundamental building block in the program - 굉장히 기본적인 빌딩블록
// - subprogram can be used multiple times - 여러번 재사용 ok
// - performs a task or calculates a value - 한가지의 task, 어떠한 값을 계산하기 위해 사용

// 1. Function declaration
// function name(param1, param2) { body... return; } 
// one function === one thing - 한가지의 함수는 한가지의 일만
// naming: doSomething, command, verb - 함수는 무언가를 동작 하는 것
// e.g. createCardAndPoint -> createCard, createPoint - 최대한 가독성이 좋고 깨끗하게 만들기
// function is object in JS 
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@2321');
log(12343214);

// 2. Parameters
// primitive parameters: passed by value - 메모리의 값이 그대로 저장 되어 있기 때문에 값이 그대로 전달됨
// object parameters: passed by reference - 메모리의 레퍼런스가 저장 되어 있기 때문에 레퍼런스가 전달됨
function changeName(obj) {
    obj.name = 'coder';
}
const epic = { name: 'epic'};
changeName(epic);
console.log(epic);

// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (Added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((args) => console.log(args));
}
printAll('dream', 'coding', 'epic', );

// 5. Local scope 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
    return undefined; // <--생략가능, return 값을 지정 해주지 않는 한 모든 값은 undefined
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
} 
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10 ) {
        //long upgrade logic...
    }
}

// good - 조건이 맞지 않는 경우 값이 undefined, -1인 경우 빠르게 return을 하고 필요한 logic들은 그 뒤에 작성
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function 
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () { // anonymous function
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() { 
    console.log('no!');
    // print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a , b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Quiz
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a+b;
        case 'subtract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('Unknown command');
    }
}
console.log(calculate('add', 2, 3));
console.log(calculate('subtract', 2, 3));
console.log(calculate('divide', 2, 3));
console.log(calculate('multiply', 2, 3));
console.log(calculate('remainder', 2, 3));