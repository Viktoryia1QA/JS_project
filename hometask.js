//addition
let a = `string`+ true; //string + boolean
console.log("string + boolean = "+ a); 

let b = `string` + 5;//string + number
console.log("string + number = " + b); 

let c = false + 10;//boolean + number
console.log("boolean + number = " + c); 


//multiplication
let am = `string` * true; //string * boolean
console.log("string * boolean = " + am); 

let bm = `string` * 5;//string * number
console.log("string * number = " + bm); 

let cm = false * 10;//boolean * number
console.log("boolean * number = " + cm); 

//division
let ad = `string` / false; //string / boolean
console.log("string / boolean = " + ad); 
// console.log(typeof ad); 

let bd= `string` / 5; //string / number
console.log("string / number = " + bd); 

let cd = true / 10; //boolean / number
console.log("boolean / number = " + cd); 

// type casting to String
let numberToStr = String(1000);
console.log(numberToStr);

let booleanToStr = String(false);
console.log(booleanToStr);

// type casting to Boolean
let numToBoolean = Boolean(10);
console.log("type casting to Boolean " + numToBoolean);

let strToBoolean = Boolean("asd");
console.log("type casting to Boolean " + strToBoolean);
// Boolean('')           // false
// Boolean(0)            // false     
// Boolean(-0)           // false
// Boolean(NaN)          // false
// Boolean(null)         // false
// Boolean(undefined)    // false
// Boolean(false)        // false


// type casting to Number
let strToNumber = Number("55ss");
console.log(strToNumber);

let booleanToNumber = Number(false);
console.log(booleanToNumber);

// Number(null)                   // 0
// Number(undefined)              // NaN
// Number(true)                   // 1
// Number(false)                  // 0
// Number(" 12 ")                 // 12
// Number("-12.34")               // -12.34
// Number("\n")                   // 0
// Number(" 12s ")                // NaN
// Number(123)                    // 123
