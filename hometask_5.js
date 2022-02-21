// 1 task
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //[min-max]
}

function runUserGame(min, max, attemptNumber) {
    let array = [];
    for (let i = 0; i < attemptNumber; i++) {
        array.push(getRandomIntInclusive(min, max));
    }
    return array;
}

function sumOfGame(array) {
    let result = 0;
    let i = 0;
    while (i < array.length) {
        result = result + array[i];
        i++;
    }
    return result;
}

function winner(array) {
    let numberPlayer = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[numberPlayer] < array[i]) {
            numberPlayer = i;
        }
    }
    return numberPlayer;
}

//-------------------------GAME-------------------
let firstPlayerAttempt = [];
let secondPlayerAttempt = [];
let attemptNumber = 3;

firstPlayerAttempt = runUserGame(1, 6, attemptNumber);
secondPlayerAttempt = runUserGame(1, 6, attemptNumber);

console.log("First Player: " + firstPlayerAttempt);
console.log("Second Player: " + secondPlayerAttempt);

let firstPlayerSum = sumOfGame(firstPlayerAttempt);
let secondPlayerSum = sumOfGame(secondPlayerAttempt);
let listSumPlayers = [firstPlayerAttempt, secondPlayerAttempt];

console.log("First Player Sum: " + firstPlayerSum);
console.log("Second Player Sum: " + secondPlayerSum);

if (firstPlayerSum > secondPlayerSum) {
    console.log("Winner is First Player");
}
else if (firstPlayerSum < secondPlayerSum) {
    console.log("Winner is Second Player");
}
else {
    console.log("Friendship won");
}
// 2 task
let dateCurrent = new Date();
let dateStart = new Date("2000-01-01");


let yearStart = dateStart.getUTCFullYear();
let yearCurrent = dateCurrent.getUTCFullYear();
console.log(yearCurrent);

let monthStart = dateStart.getUTCMonth();
let monthCurrent = dateCurrent.getUTCMonth();

let dayOfMonthStart = dateStart.getUTCDate();
let dayOfMonthCurrent = dateCurrent.getUTCDate();

let weekDayCurrent = dateCurrent.getDay();

// console.log("sssssss" + dayOfMonthCurrent);
let qtyOf13Friday = 0;

for (let year = yearStart; year < yearCurrent; year++) {
    for (let month = monthStart; month < 12; month++) {
        let date13 = new Date(year, month, 13);
        if (date13.getDay() === 5) {
            qtyOf13Friday++;
            console.log(date13);
        }
    }
}
console.log("Number of 13 Friday is " + qtyOf13Friday);

// 3 task - 1
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //[min-max]
}

let m = 20; //number
let n = 10; //qty
let max = m;

let resultArray = [];

for (let i = 0; i < n-1; i++) {
    let number = getRandomIntInclusive(0, max);
    resultArray[i] = number;
    max = max - number;
    resultArray[n-1] = max;
}

console.log(resultArray);
console.log(resultArray.length === n);

let sum = 0;
for(let i = 0; i < resultArray.length; i++){
    sum += resultArray[i];
    }
console.log(sum);

// 3 task - 2
let m = 20; //number
let n = 3; //qty
let max = m;

let resultArray = [];

for (let i = 0; i < n - 1; i++) {
    let number = Number((Math.random() * max).toFixed(2));
    resultArray[i] = number;
    max = max - number;
    resultArray[n - 1] = Number(max.toFixed(2));
}

console.log(resultArray);
console.log(resultArray.length === n);

let sum = 0;
for (let i = 0; i < resultArray.length; i++) {
    sum += resultArray[i];
}
console.log(sum);
