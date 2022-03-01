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

// create a function - arrayCapitalizer
// parameter - array
// change someething to each item in an array - intepretation
// requirements of iteration - length is not going to change, going from array to array by mapping over the array
// the value of map will be a string - capitalize

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

describe("randomNouns1", () => {
  let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  let result = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew]
  it("adds capitalized to the start of an array", () => {
    expect(capitalized(randomNouns1)).toEqual(result)
  })
})

const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("randomNouns2", () => {
  let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  let result = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  it("adds capitalized to the start of an array", () => {
    expect(capitalized(randomNouns2)).toEqual(result)
  })
})

// b) Create the function that makes the test pass.

const capitalize = require('./capitalize');
test('returns the first letter capitalized', () => {
  expect(capitalize('temperature', 'database', 'chopsticks','mango', 'deduction')).toBe('Temperature', 'Database', 'Chopsticks', 'Mango', 'Deduction');
});

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// create a function that takes in a string and logs the index of the first vowel
// change someething to each item in an array - first vowel
// requirements of iteration - length is not going to change, going from array to array by mapping over the array
// the value of map will be a string - first vowel

const vowelTester1 = "learn"
// Expected output: 1

const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
expect((function-name()).toEqual(exact-output)
expect((function-name()).toEqual(exact-output)
expect((function-name()).toEqual(exact-output)
})


// b) Create the function that makes the test pass.
const vowelTester = require('./vowelTester');
test('returns the first vowel', () => {
  expect(vowelTester('e', 'a', 'a');
});
