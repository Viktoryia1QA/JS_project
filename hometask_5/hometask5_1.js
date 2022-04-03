//1 task:

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
// let listSumPlayers = [20,1,4,0,7,33];

console.log("First Player Sum: " + firstPlayerSum);
console.log("Second Player Sum: " + secondPlayerSum);
console.log("Number of Winner: " + winner(listSumPlayers +1));

//2 tatsk:
let currentDay = new Date();

let dayTime = 1000*60*60*24;
console.log(dayTime);

let weekTime = dayTime*7;
console.log(weekTime);

let startDay = new Date("2000-01-01");
console.log("startDay: " + startDay);
// console.log(startDay.getDay());

let firstFriday =  new Date(startDay.getUTCMilliseconds() + dayTime*6);
console.log("firstFriday: " + firstFriday);


