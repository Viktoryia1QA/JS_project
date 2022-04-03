//1 task function: reverse the array - [1,2,3,4,5,6] [6,5,4,3,2,1]
function reverseArray(array) {
  return array.reverse();
}

let array1_1 = [1, 2, 3, 4, 5, 6];
let array1_2 = ["first", "second", "third"];
console.log(`1 task function: reverse the array `);
console.log(reverseArray(array1_1));
console.log(reverseArray(array1_2));

//2 task function: find max in Array ([3,67,15...])
function findMaxInArray(array) {
  array.sort((a, b) => b - a)
  return array[0];
}

let array2 = [1, 20, 3, 405, 65, 65];
console.log(`2 task function: find max in Array `);
console.log(findMaxInArray(array2));

//3 task: Fibonacci Sequence from N member with length of array M
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function createFibonacciArray(array, n, m) {
  let memberN = fib(n);
  for (i = 0; i < m; i++) {
    array.push(memberN);
    memberN = fib(n + 1);
    n++;
      }
    }

let memberN = 2;
let lengthArray = 5;
let array3 = [];
createFibonacciArray(array3, memberN, lengthArray);
console.log(`3 task: Fibonacci Sequence from N  with length M `);
console.log(array3);

// 4 task: how many match in value + position and  only in value
function matchInValue(firstNumber, secondNumber){
  let count = 0;
  let firstNumber1 = String(firstNumber);
  let secondNumber1 = String(secondNumber);
    for(let i=0; i < firstNumber1.length; i++){
     for(let j=0; j < secondNumber1.length; j++){
        if(firstNumber1[i]===secondNumber1[j]){
          count++;
        }
      }
    }
  console.log(`Match In Value = `+count);
}
matchInValue(1234, 2514);

function matchInValueAndPosition(firstNumber, secondNumber){
  let count = 0;
  let firstNumber1 = String(firstNumber);
  let secondNumber1 = String(secondNumber);
      for(let i=0, j=0; i < firstNumber1.length, j < secondNumber1.length;  i++,j++){
      if(firstNumber1[i]===secondNumber1[j]){
          count++;
        }
      }
  console.log(`Match In Value And Position = `+count);
}
matchInValueAndPosition(1234, 2514);


//5 task: sort array asc/desc
function sortArrayAsc(array) {
  return array.sort((a, b) => b - a);
}

function sortArrayDesc(array) {
  return array.sort((a, b) => a - b);
}
let array5 = [1, 20, 3, 405, 65, 65];
console.log(`5 task: sort array asc/desc`);
console.log(sortArrayAsc(array5));
console.log(sortArrayDesc(array5));

// 6 task: remove all duplicates from array
let array6 = [12, 25, 12, '123', '123', true, false, true, null, null];

function removeDuplicatesArray(array){
  let uniqSet = new Set(array);
  return [...uniqSet];
}

console.log(`6 task: remove all duplicates from array`);
console.log(removeDuplicatesArray(array6));