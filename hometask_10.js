//1 task: need to create 3 Promises - including setTimeout with random Delay(1, 5).  promise = getTimeoutWithDelay();
// with Promise.all get array of Promises and find Sum.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTimeoutWithDelay() {
    return new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            resolve(random);
        }, random * 1000);
        console.log(random);
    })
}

let promiseDelay1 = getTimeoutWithDelay();
let promiseDelay2 = getTimeoutWithDelay();
let promiseDelay3 = getTimeoutWithDelay();

// // Promise.all([promiseDelay1, promiseDelay2, promiseDelay3])
// // .then((data) => {
// //     let sum = data.reduce((acc, next) => {
// //         return acc + next;
// //     })
// //     console.log(sum);
// //     return sum;
// // })

Promise.all([promiseDelay1, promiseDelay2, promiseDelay3])
    .then((arr) => {
        let sum = 0;
        arr.forEach((i) => {
            sum += i;
            //   console.log(i);
        })
        console.log(`1 task: Array of Promises is following [${arr}]`);
        console.log(`1 task: Sum of Promises equals "${sum}"`);
        return sum;
    })


// 2 task: need to create 3 Promises with setTimeout (Delay(1, 5)). promise1 = 1, promise2 = 2, promise3 = 3.
//  with Promise.race find faster Promise

let promise1 = new Promise((resolve, reject) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
        resolve(1);
    }, random * 1000);
    console.log(`2 task: Delay of Promise1 is "${random}" `);
});


let promise2 = new Promise((resolve, reject) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
        resolve(2);
    }, random * 1000);
    console.log(`2 task: Delay of Promise2 is "${random}" `);
});

let promise3 = new Promise((resolve, reject) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
        resolve(3);
    }, random * 1000);
    console.log(`2 task: Delay of Promise3 is "${random}" `);
});

Promise.race([promise1, promise2, promise3])
    .then((data) => {
        console.log(`2 task: Promise with result "${data}" is faster`);
    })

// 3 task: - need to create function getNum, which returns new Promise(resolve, reject), with with setTimeout (Delay(1, 5)).
//- create async getSqrOfNum() =  await getNum(), and then Square of result of getNum() function.

function getNum() {
    return new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            resolve(random);
        }, 3000);
        console.log(`3 task: Random is "${random}" `);
    })
}

async function getSqrOfNum() {
    let result = await getNum();
    return console.log(`3 task: Square of random is "${Math.pow(result, 2)}"`);
}
getSqrOfNum()

// 4 task: - need to create function getNum1, which returns new Promise(resolve, reject), with with setTimeout (Delay(1, 5)) - 3sec.
// function getNum2, which returns new Promise(resolve, reject), with with setTimeout (Delay(6, 10)) - 5sec.
//- create async getSumOfNum() =  await getNum1() and getNum2(), and then Sum of result of getNum() functions.

function getNum1() {
    return new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            resolve(random);
        }, 3000);
        console.log(`4 task: Random for getNum1 is "${random}" `);
    })
}

function getNum2() {
    return new Promise((resolve, reject) => {
        let random = getRandom(6, 10);
        setTimeout(() => {
            resolve(random);
        }, 5000);
        console.log(`4 task: Random for getNum2 is "${random}" `);
    })
}

async function getSumOfNum() {
    let result1 = await getNum1();
    let result2 = await getNum2();
    return console.log(`4 task: Sum is "${result1 + result2}"`);
}
getSumOfNum()