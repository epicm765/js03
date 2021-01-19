'use strict';

// Array 

// 1. Declaration 
const arr1 = new Array(); 
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열은 인덱스가 0부터 시작하기 때문에 총 길이의 -1을 해야 마지막 인덱스를 받아옴

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to end
fruits.push('strawberry','peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry','peach');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push - 뒤나 앞에서 추가, 제거가 되는 것이 아니라 전체가 움직이기때문에 느리다.
// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'melon', 'watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['b', 'c']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('lemon'));

// includes
console.log(fruits.includes('melon'));
console.log(fruits.includes('D'));

// lastIndexOf - 중복된 값이 있을 때 먼저 나온 값을 리턴함, last는 그 반대
console.clear();
fruits.push('apple')
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
}

// Q2. make an array out of a string
{
    const fruits = ['apple, kiwi, banana, cherry'];
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
  }
  
// Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
// Q5. find a student with the score 90
  {
  }
  
// Q6. make an array of enrolled students
  {
  }
  
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
  {
  }
  
// Q8. check if there is a student with the score lower than 50
  {
  }
  
// Q9. compute students' average score
  {
  }
  
// Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
  {
  }



