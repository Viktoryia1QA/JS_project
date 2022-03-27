//1 task function: reverse the array - [1,2,3,4,5,6] [6,5,4,3,2,1]
function reverseArray(array: number[] | string[]): number[] | string[] {
  return array.reverse();
}

const arrayNumber: number[] = [1, 2, 3, 4, 5, 6];
const arrayString: string[] = ['first', 'second', 'third'];
console.log(`1 task function: reverse the array `);
console.log(reverseArray(arrayNumber));
console.log(reverseArray(arrayString));

//2 task function: find max in Array ([3,67,15...])
function findMaxInArray(array: number[]): number {
  array.sort((a, b) => b - a);
  return array[0];
}

const arrayMax: number[] = [1, 20, 3, 405, 65, 65];
console.log(`2 task function: find max in Array `);
console.log(findMaxInArray(arrayMax));

//3 task: Fibonacci Sequence from N member with length of array M
function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function createFibonacciArray(array: number[], n: number, m: number) {
  let memberN: number = fib(n);
  let i: number;
  for (i = 0; i < m; i++) {
    array.push(memberN);
    memberN = fib(n + 1);
    n++;
  }
}

const memberN = 3;
const lengthArray = 5;
const arrayFib: number[] = [];
createFibonacciArray(arrayFib, memberN, lengthArray);
console.log(`3 task: Fibonacci Sequence from N  with length M `);
console.log(arrayFib);

//   4 task: how many match in value + position and  only in value
function matchInValue(firstNumber: number, secondNumber: number) {
  let count = 0;
  const firstNumber1 = String(firstNumber);
  const secondNumber1 = String(secondNumber);
  for (let i = 0; i < firstNumber1.length; i++) {
    for (let j = 0; j < secondNumber1.length; j++) {
      if (firstNumber1[i] === secondNumber1[j]) {
        count++;
      }
    }
  }
  console.log(`Match In Value = ` + count);
}
matchInValue(1234, 2514);

function matchInValueAndPosition(firstNumber: number, secondNumber: number) {
  let count = 0;
  const firstNumber1 = String(firstNumber);
  const secondNumber1 = String(secondNumber);
  for (let i = 0, j = 0; i < firstNumber1.length, j < secondNumber1.length; i++, j++) {
    if (firstNumber1[i] === secondNumber1[j]) {
      count++;
    }
  }
  console.log(`Match In Value And Position = ` + count);
}
matchInValueAndPosition(1234, 2514);

//5 task: sort array asc/desc
function sortArrayAsc(array: number[]) {
  return array.sort((a, b) => b - a);
}

function sortArrayDesc(array: number[]) {
  return array.sort((a, b) => a - b);
}
const arrayForSort: number[] = [1, 20, 3, 405, 65, 65];
console.log(`5 task: sort array asc/desc`);
console.log(sortArrayAsc(arrayForSort));
console.log(sortArrayDesc(arrayForSort));

// 6 task: remove all duplicates from array
const array6: any = [12, 25, 12, '123', '123', true, false, true, null, null];

function removeDuplicatesArray(array: any) {
  const uniqSet = new Set(array);
  return [...uniqSet];
}

console.log(`6 task: remove all duplicates from array`);
console.log(removeDuplicatesArray(array6));
