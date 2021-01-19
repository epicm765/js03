// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';
//var가 여기 선언됨

// 2. Variable, rw(read/write)
// let (added is ES6)
let globalName = 'global name'; // 글로벌은 어디서든 접근가능, 최소한으로 사용
{
let name = 'epic';
console.log(name);
name = 'hello'
console.log(name);
console.log(globalName);
} // 블록 밖에선 블록 안으로 간섭 불가능
console.log(name);
console.log(globalName);

// var  *Don't use*
// var hoisting : 어디에 선언했느냐에 상관없이 제일 상단으로 끌어 올리는 것
// 값을 선언하기도 전에 값을 넣었을 때 에러가 나오는 것이 당연한 결과이지만 에러가 나오지않음
{
    age = 4;
    var age;
}
console.log(age); // 블록스코프를 철저히 무시함

// 3. Constant, r(read)
// 가능하다면 변수로 const를 사용
// 변수의 값을 변경하는 것이 필요하다면 let을 사용
const daysInWeek = 7;
const MaxNumber = 5;

// Note
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a reasons:
// - security
// - thread safety
// - reduce human mistakes

//  javascript에서 선언하는 변수로는 주로
//  mutable 타입의 let 
//  immutable 타입의 const가 있다.

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string) < -- 편리함
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // < -- 편리함
console.log('value: ' + 'helloBob' + 'type: ' + typeof helloBob); // 번거로움

//boolean
// false : 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id'); 
const symbol2 = Symbol('id'); 
console.log(symbol1 === symbol2); // 주어지는 string에 상관없이 고유한 식별자를 만들 때 사용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true 
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 항상 .description으로 변환해서 출력해주어야함

//object, real-life object, data structure
const kang = { name: 'kang', age: 26};
kang.age = 25;

// 5. Dynamic typing: dynamically typed language 
let text = 'hello';
console.log(text.charAt(0)); // h index는 배열을 쓸 때 0에서부터 시작됨 h / e / l / l / o <-- 0 / 1 / 2 / 3 / 4
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = 5 + '7'
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error

