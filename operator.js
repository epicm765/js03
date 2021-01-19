// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 =
''''
${1 + 2}`); // 중간에 공백이나 특수문자가 들어와도 전부 결과에 포함됨

console.log('kang\'s \nbook')
// \n : 줄바꿈
// \t : Tab키

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter ${counter}`);
const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter ${counter}`);
const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement}, counter ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
console.log(x += y); // x = x + y;
console.log(x -= y); // x = x - y;
console.log(x *= y); // x = x * y;
console.log(x /= y); // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // grater than
console.log(10 >= 6); // grater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // true를 찾으면 실행을 중지

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // false를 찾으면 실행을 중지 

// 연산을 많이하는 함수, 익스프레션은 제일 뒤에다 배치하는 것이 효율적

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }
function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('★');
    }
    return true;
}
// ! (not) 값을 반대로 변경해줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const kang1 = { name: 'kang' };
const kang2 = { name: 'kang' };
const kang3 = kang1;
console.log(kang1 == kang2); // f
console.log(kang1 === kang2); // f
console.log(kang1 === kang3); // t

// equality - puzzler
console.log(0 == false); // 0, null, undefined, empty문자열은 false로 간주될 수 있음 t
console.log(0 === false); // 0은 boolean 타입이 아님 f
console.log('' == false);  // t
console.log('' === false); // empty문자열은 boolean type이 아님 f
console.log(null == undefined); // null = undefined t
console.log(null === undefined); // f

// 8. Conditional operators: if
// if, else if, else
const name = 'kang';
if (name === 'kang') {
    console.log('Welcome, Kang!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary Operator: ?
// condition ? value : value2;
console.log(name === 'epic' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('hi fox')
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (  i > 0 );

// for loop, for(begin; condition; step)  
for (i = 3; i > 0; i--) { 
// i는 3이다 -> i가 0보다 큰가? -> i에서 1을 빼라 -> i는 2이다 -> i는 0보다 큰가? -> i에서 1을 빼라 -> condition에 맞을때까지 반복
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) { // i = 1 2 3 4 5 6 7 8 9
    for (let j = 0; j < 10; j++) { // j = 1 2 3 4 5 6 7 8 9
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
// for (let i = 1; i < 10; i++) {
//     if (i === 10) {
//         continue;
//     }
//     i = i + 1;
//     console.log(`for: ${i}`);
// }

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
 console.log(`q1. ${i}`);
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

// for (let i = 0; i < 10; i++) {
//     if (i === 9) {
//         break;
//     }
//     console.log(`for: ${i}`)
// }
for (let i = 0; i <11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}