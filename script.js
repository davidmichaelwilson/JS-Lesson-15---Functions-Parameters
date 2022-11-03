// const welcomeElement = document.getElementById("welcome-element")

// function greetUser(greeting,name,emoji) {
//   welcomeElement.textContent = `${greeting}, ${name} ${emoji}`
//   }

// greetUser(“Hello”, “James Joyce”, “!”)

// Practice 1: Give the function greetUser() a parameter called greeting that should replace the string "Welcome back".






// Practice 2: Use second parameter for the function.







// Practice 3: Refactor with template literals.







// Practice 4: Add another parameter for an emoji.






// Practice 5: Create a new function called multiply() that multiplies two numbers together and returns the result.







  
// Practice 6: Create a new function called getSecond(myArray). This will return the second item in an array. Call the function with an array as an argument and log it to the console to check it.






// ========= PRACTICE 7 ==============
// 7.1
const expectedMinutesInOven = 40
const preparationMinutesPerLayer = 2

// 7.2
function remainingMinutesInOven(actualMinutesInOven) {
    return expectedMinutesInOven - actualMinutesInOven
}

// 7.3
function preparationTimeInMinutes(numberOfLayers) {
  return preparationMinutesPerLayer * numberOfLayers
}

// 7.4
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

console.log(remainingMinutesInOven(10))















