// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: This will log the letters of the letters and numbers of the variable (cohort) in "Aplha 2022" array and will space them apart placing the leeters within their own qoutation marks.
// b) Verify and explain: When I ran this code the output placed the letters and numbers of "Aplpha 2022" split apart with each individiual character in its own quotation marks.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will not log anything and/or it will render an error because the code is missing parameters from the function expression.
// b) Verify and explain: When I ran this code the output logged Error: Unpexted token ')'


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: This will log all the product of all numbers in the array multiplied by 2.
// b) Verify and explain: Array [8, 10, 12, 14, 16]. When I ran this code it multiplied all the numbers in the array by 2 by using the .map() function.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will filter log only the odd numbers in the array.
// b) Verify and explain: Array [11, 13, 15]. Only the odd numbers in the array were logged due to the filter function that was used.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This will log "JavaScript".
// b) Verify and explain: When I ran this code it logged "JavaScript" because "JavaScript" is the first language in array or arrays in which the console.log finction designated in the [] brackets


// --------------------STRETCH: What will this log?

class Learn {Object { student: "George", cohort: "Alpha", year: 2022 }
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: This will student: "George" , cohort: "Alpha", and year: 2022.
// b) Verify and explain: Object { student: "George", cohort: "Alpha", year: 2022 }. When I ran this code it rendered "GeorgeObject { student: "George", cohort: "Alpha", year: 2022 }"
