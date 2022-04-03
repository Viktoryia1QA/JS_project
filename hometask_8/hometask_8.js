//1 task: counts and prints the number of functions calls.
function getNumberOfCall() {
    let count = 1;
    function getCount() {
        console.log(count)
        return count++;
    }
    return getCount;
}
console.log(`1 task:  counts and prints the number of functions calls`);

let number = getNumberOfCall();
number();
number();
number();

//2 task: generate random numbers from 1 to 100
let min = 1;
let max = 100;

function geRandomArray() {
    let array = [];
    return  function getRandom() {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
        if (array.length < 100) {
            getRandom();
        }
        return array;
    }
}
console.log(`2 task: generate random numbers from 1 to 100`);

let newArray =  geRandomArray();
console.log(newArray());

//3 task: leave positive numbers, take the square root of these numbers 

let inputArr = [1, -2, 3, 0, 4, -5, 6, -11, 100];
//through loop:

function getSquareRootArrayLoop(array) {
    let resultArrLoop = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            resultArrLoop.push(Number(Math.sqrt(array[i]).toFixed(2)));
        }
    }
    return resultArrLoop;

}
console.log(`3 task through loop: leave positive numbers, take the square root `);
console.log(getSquareRootArrayLoop(inputArr));

//through callback:
let resultArrCallback = [];

function getSquareRootArrayCallback(elementOfArray) {
    if (elementOfArray >= 0) {
        resultArrCallback.push(Number(Math.sqrt(elementOfArray).toFixed(2)));
    }
    return resultArrCallback;
}


inputArr.map(getSquareRootArrayCallback);
console.log(`3 task through callback: leave positive numbers, take the square root `);
console.log(resultArrCallback);

//4 task: Print Array elements sequentially using recursion
let array4 = [1, -2, 3, 0, 4, -5, 6, -11];

function inputNumbers(arr) {
    console.log(arr[0]);
    arr.shift();
    if (arr.length > 0) {
        inputNumbers(arr)
    }
}
console.log(`4 task: Print Array elements sequentially using recursion `);

inputNumbers(array4);

//5 task: using recursion: sum of Numbers > 9,  sum numbers again
function sumOfNumbers(givenNumber) {
    let sum = givenNumber.toString().split("").reduce((prev, next) => {
        return +prev + +next;
    });
    if (sum > 9) {
        return sumOfNumbers(sum);
    }
    return sum;
}
console.log(`5 task: using recursion: if sum of Numbers > 9 - sum numbers again`);
console.log(sumOfNumbers(105680));