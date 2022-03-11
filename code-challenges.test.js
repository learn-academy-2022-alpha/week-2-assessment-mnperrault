// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]

// declare a function that takes in an array
// const numbersArray1 = [6, 7, 8, 9, 10]

// create a local variable that maps through each number of the array multiply by the numbers [2, 3, 4, 3, 3]
// let eachItem = array.map(value => value * 2)
// let eachItem = array.map(value => value * 3)
// let eachItem = array.map(value => value * 4)
// let eachItem = array.map(value => value * 3)
// let eachItem = array.map(value => value * 3)


const numbersArray1 = [6, 7, 8, 9, 10] => {

}

describe('should multiply',() =>{
    it('should multiply',() =>{
        expect((6 * 2)).toBe(18);
    });
})



const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// declare a function that takes in an array
// const numbersArray2 = [24, 27, 30, 33, 36]

// create a local variable that maps through each number of the array and multiplies it by 3
// let eachItem = array.map(value => value * 3)

const numbersArray2 = [24, 27, 30, 33, 36] => {

}

describe('should multiply',() =>{
    it('should multiply',() =>{
        expect(*(3)).toBe();
    });
})




// b) Create the function that makes the test pass.

const numbersArray2 = (24, 27, 30, 33, 36) => {
  return numbersArray2.multBy3()
}



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree",() => {
    it('takes a number as the argument and decides if the number is divisible by three',() =>{

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"
expect((function-name()).toEqual(exact-output)
expect((function-name()).toEqual(exact-output)
expect((function-name()).toEqual(exact-output)
})

// create a function that's divisible by three
//parameter , number
//modulo operator to determine if the number is divisible by three
// return string intepretation with the number and description

// b) Create the function that makes the test pass.


const divisibleByThree = (number) => {
  if(number % 3 === 0){
    return '${number}' 'is divisible by three'
  }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// // a describe method that lists the name of the function OR naming of the particular test.
describe("toCapital", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of strings and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(toCapital(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(toCapital(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
// // Got Red.
// ReferenceError: toCapital is not defined

// b) Create the function that makes the test pass.
// Pseudo Code:
// Create a function named toCapital.
// Have it take in array of words
// Use  the .map method as a way to return a whole array
// Input something to make the first letter of the string toUpperCase
// Seperate the first letter of the strings from the rest
// Join the words back together
// Returns an array with all first letter of the words capitalized

const toCapital = (string) => {
  // const words = array.split(",")
  // return string.chartAt(0).toUpperCase() + string.slice(1)
  return string.map(string => string.charAt(0).toUpperCase() + string.slice(1))
}
// const word.map(capitalize.join(" ")

// Got Green.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// a describe method that lists the name of the function OR naming of the particular test.
describe("vowelLetter", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(vowelLetter(vowelTester1)).toEqual(1)
    expect(vowelLetter(vowelTester2)).toEqual(0)
    expect(vowelLetter(vowelTester3)).toEqual(2)
  })
})
// Got Red!
// vowelLetter is not defined.

// b) Create the function that makes the test pass.
//Pseudo Code:
// Create a function named vowelLetter
// Take in a string
// Potentially use .length to go through each string. [Only for arrays?]
// Will need to find the index of the first vowel
// Likely need to list vowels
// Return the first index of the first vowel

const vowelLetter = (string) => {
  // if(string = ("aeuouAEIOU"))
  const strings = ("aeiouAEIOU")
  return string.indexOf("0") !== -1
  // (string[" "]) !== -1
}

// Did not get Green.
// Unfortunately, I was not able to figure out this problem. I keep getting back out -1 or false for the received value.
// Expected: 1
//     Received: -1
// Additionally, if I would set it to not equal -1 it will return
// Expected: 1
//    Received: false



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

// a describe method that lists the name of the function OR naming of the particular test.
describe("vowelIndexFinder", () => {
  const vowelTester1 = "learn"
  const vowelTester2 = "academy"
  const vowelTester3 = "challenges"
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("logs the index of the first vowel.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(vowelIndexFinder(vowelTester1)).toEqual(1)
    expect(vowelIndexFinder(vowelTester2)).toEqual(0)
    expect(vowelIndexFinder(vowelTester3)).toEqual(2)
  })
})

// Test failed.
// ReferenceError: vowelIndexFinder is not defined

// b) Create the function that makes the test pass.

// Create a function called vowelIndexFinder that will take in one a string
// Inside the function set a variable called splitString and assign it to string.split("")
// Create a for loop that will loop through the variable splitString
// The starting condition will be i=0, and the ending condition will be i<splitString.length, and how to respond i++
// Inside the for loop, create a conditional statement explaining that if the value of the splitString at index i is strictly equal to a vowel (a, e, i, o, or u), then it will return the index i because the expected output of the function is the index inwhich the first vowel is displayed

const vowelIndexFinder = (string) => {
  let splitString = string.split("")
  for(let i = 0; i<splitString.length; i++){
    if(splitString[i] === "a" || splitString[i] === "e" || splitString[i] === "i" || splitString[i] === "o" || splitString[i] === "u"){
      return i
    }
  }
}

// Got Green.

