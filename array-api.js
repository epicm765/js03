// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // fruits.forEach((fruits) => console.log(fruits));
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, cherry';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
// Q4. make new array without the first two elements
  { 
    const array = [1, 2, 3, 4, 5]; 
    const result = array.slice(2, 5); // splice는 배열 자체를 수정함, slice는 원하는 부분만 리턴해서 받아옴
    console.log(result);
    console.log(array);
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
      const result = students.find((student) => student.score === 90);
      console.log(result);
  }
  
// Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score); 
      console.log(result);
  }
  
// Q8. check if there is a student with the score lower than 50
  {
      console.clear();
      const result = students.some((student) => student.score < 50); // 배열 중에 어떤 것이라도 하나 만족하는 것이 있는지 검사한다면 some
      console.log(result);

      const result2 = !students.every((student) => student.score >= 50); // 모든 배열의 조건이 만족 되어야 할 때 every
      console.log(result2);
      console.log(!true);
  }
  console.clear();
// Q9. compute student's average score
  {
    // const result = students.reduce((prev, curr) => { // reduce는 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용 하는 것
    //     console.log(prev); // 이전 콜백함수에서 리턴된 값이 전달되어온다
    //     console.log(curr); // 배열의 아이템을 순차적으로 전달받는다
    //     return prev + curr.score ;
    // }, 0);
    // console.log(result);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  
// Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
      .map(student => student.score)
      .filter((score) => score >= 50)
      .join();
      console.log(result);
  }
  
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
  {
      const result = students.map(student => student.score)
      .sort((a, b) => a - b )
      .join();
      console.log(result);
  }
