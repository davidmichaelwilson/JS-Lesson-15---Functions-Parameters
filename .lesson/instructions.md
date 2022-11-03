# Instructions  

 Practice 1:

 Give the function `greetUser()` a parameter called greeting that should replace the string "Welcome back".

 ---

Practice 2:

Use second parameter for the function.

---

Practice 3:

Refactor with template literals.

---

Practice 4:

Add another parameter for an emoji.

---

Practice 5:

Create a new function called multiply() that multiplies two numbers together and returns the result.

---

Practice 6:

Create a new function called getSecond(myArray). This will return the second item in an array. Call the function with an array as an argument and log it to the console to check it.

---

Practice 7: Lindros' Lascivious Limburger

Lindros has promised to make his girlfriend's birthday dinner of her favorite Limburger Pie, but he hasn't started yet! Let's write some code to help him cook an exquisitely stinky meal.

You have four tasks for this practice:

1. Define the expected oven time in minutes
>Declare an `expectedMinutesInOven` constant. This should represent the number of minutes the lasagna should be in the oven. According to Lindros' great Aunt Gretel, the old family recipe says the expected oven time in minutes is 40.

2. Calculate the remaining oven time in minutes
> Implement a `remainingMinutesInOven` function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task. Use this for the argument:
`remainingMinutesInOven(30)`.

3. Calculate the preparation time in minutes
> Implement a `preparationTimeInMinutes` function that takes the number of layers of limburger (it's a thick pie) as a parameter and returns how many minutes you spent preparing the limburger pie, assuming each layer takes you 2 minutes to prepare. Use this: `preparationTimeInMinutes(2)`.

4. Calculate the total working time in minutes
>Implement a `totalTimeInMinutes` function that takes two parameters: the numberOfLayers parameter is the number of limburger layers and the `actualMinutesInOven` parameter is the number of minutes the limburger has been in the oven. The function should return how many minutes in total you've worked on cooking the limburger, which is the sum of the preparation time in minutes, and the time in minutes the limburger has spent in the oven at the moment. For example: `totalTimeInMinutes(3, 20)`.