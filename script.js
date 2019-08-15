// --------------------- Lightning exercise -----------------------//
// Create a new repo with an index.html file and a JavaScript file. Link your JavaScript file to your HTML document.
// Add an empty h1 element to your HTML document. Give it an id of "main-heading"
// Use document.querySelector to get a reference to your h1 element

const mainHeading = document.querySelector("#main-heading")
console.log(mainHeading)
// Use .innerHTML to give your h1 element the text "My Awesome Website"
mainHeading.innerHTML = "My Awesome Website"

const container = document.querySelector("#container")
console.log(container)

container.innerHTML = `<section class="blue-background">
    <article>
        <h2>About Me</h2>
        <p>
            klajdflkasjdf
            adlskfjaslkdfjalskdjf!!!
            hello hello hello
        </p>
    </article>
</section>`



// We can also create the entire h1 element with javascript! And other elements! And use string interpolate to combine them into one big  HTML string




// ----------- Interlude: What the heck is a fat arrow function? ---------//

// function sayHello(){
//     console.log("hello, world")
// }

// const sayHello = function(){
//     console.log("hello, world")
// }

// const sayHello = () => {
//     console.log("hello, world")
// }

// sayHello()

function multiplyTwoNumbers(num1, num2){
    return num1*num2
}

const multiplyTwoNumbersWithFatArrow = (num1, num2) => {
    return num1*num2
}

const product = multiplyTwoNumbers(2, 2)
const fatArrowProduct = multiplyTwoNumbersWithFatArrow(3, 3)
console.log(product)










// ------------- Lightning Exercise 2 ------------------------------//
// Refactor the following functions as fat arrow functions:

function checkIfEven(number){
    if(number%2===0){
        return true
    } else {
        return false
    }
}

// const checkIfEven = function(){}
// const checkIfEven = (number) => {
//     if(number%2===0){
//         return true
//     } else {
//         return false
//     }
// }


// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

const addTwoNumbers = (num1, num2) => num1 + num2




// function makeASandwich(breadType, toppings){
//     return `Here's your ${toppings} sandwich on ${breadType}`
// }

// const makeASandwich = (breadType, toppings) => {
//     return `Here's your ${toppings} sandwich on ${breadType}`
// }

const makeASandwich = (breadType, toppings) => `Here's your ${toppings} sandwich on ${breadType}`

const finishedSandwich = makeASandwich("rye", "bacon, lettuce, and tomato")
console.log(finishedSandwich)


// Execute each function and log the result to the console


// ------------ FUNCTIONS THAT RETURN DOM COMPONENTS ------------------//

// // What if we want to build the same HTML components multiple times? Example: print the same info for every student in the class

// Not dynamic
// const createStudentComponent = () => {
//     return `
//         <div class="student">
//             <h1>Alejandro Font</h1>
//             <section>Day cohort 27</section>
//             <aside>
//                 Wore pants that were too short for his legs.
//                 Was an incredible friend to his teammates.
//             </aside>
//         </div>
//     `
// }



// const alejandroComponent = createStudentComponent()
// console.log(alejandroComponent)

// Go back and fill in other examples

// document.querySelector("#container").innerHTML = createStudentComponent()


// Dynamic


// const createStudentComponent = (studentName, cohort, description) => {
//         return `
//             <div class="student">
//                 <h1>${studentName}</h1>
//                 <section>${cohort}</section>
//                 <aside>
//                     ${description}
//                 </aside>
//             </div>
//         `
//     }

// const studentContainer = document.querySelector("#container")
// const studentHTMLString = createStudentComponent("Daryl", "Cohort 2", "Really cool guy")
// console.log("this should be the container", studentContainer)
// console.log("this should be what we want to put in the container", studentHTMLString)

// studentContainer.innerHTML = studentHTMLString






const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const createStudentComponent = (studentName, className, info, score) => {
    return `
        <div class="student">
            <h1>${studentName}</h1>
            <section>${className}</section>
            <aside>
                ${info}
            </aside>
            <p>${score}</p>
        </div>
    `
}

for(let i = 0; i < students.length; i++){
    const currentStudent = students[i]
    // console.log(currentStudent.name)
    const currentStudentComponent = createStudentComponent(currentStudent.name, currentStudent.subject, currentStudent.info, currentStudent.score)

    const container = document.querySelector("#container")
    container.innerHTML += currentStudentComponent
    // container.innerHTML = container.innerHTML + currentStudentComponent
}







// ------------------------------- break ---------------------------------------//

















