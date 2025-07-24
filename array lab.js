// hello update to test this is uploaded


/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const Foods = [];  

console.log('Exercise 1 result:', Foods);





/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
const foodS = [];

foodS.push('pizza');
foodS.push('cheeseburger');


console.log('Exercise 2 result:', foodS);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
const Meal = [];

Meal.push('pizza');
Meal.push('cheeseburger');
Meal.unshift('taco');


console.log('Exercise 3 result:', Meal);





/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const foods = [];

   foods.push('pizza');
   foods.push('cheeseburger');
   foods.unshift('taco');
const favFood = foods[1];

console.log('Exercise 4 result:', favFood);


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)






/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
const fooDs = [];

fooDs.push('pizza');
fooDs.push('cheeseburger');
fooDs.unshift('taco');
fooDs.splice(2, 0, 'tofu');


console.log('Exercise 5 result:', fooDs);





/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
const foOds = [];
foOds.push('pizza');
foOds.push('cheeseburger');
foOds.unshift('taco');
foOds.splice(2, 0, 'tofu');
foOds.splice(1, 1, 'sushi', 'cupcake');

console.log('Exercise 6 result:', foOds);




/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
const fOods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
const yummy = fOods.slice(1, 3);



console.log('Exercise 7 result:', yummy);






/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const fooods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];

const soyIdx = fooods.indexOf('tofu');

console.log('Exercise 8 result:', soyIdx);






/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
const foOods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];

const allFoOods = foOods.join(' -> ');

console.log('Exercise 9 result:', allFoOods);





/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const foOOods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];

const hasSoup = foOOods.includes('soup');


console.log('Exercise 10 result:', hasSoup);


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const Nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

for (let i = 0; i < Nums.length; i++) {
  if (Nums[i] % 2 !== 0) {
    odds.push(Nums[i]);
  }
}

console.log('Exercise 11 result:', odds);






/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];

  if (num % 3 === 0) {
    fizz.push(num);
  }
  if (num % 5 === 0) {
    buzz.push(num);
  }
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);






/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrayS = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]];

const numList = numArrayS[numArrayS.length - 1];

console.log('Exercise 13 result:', numList);





/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
const nuMArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]];

const num = nuMArrays[2][1];

console.log('Exercise 14 result:', num);





/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]];
let total = 0;
numArrays.forEach(innerArray => {
  innerArray.forEach(num => {
    total += num;});
});

console.log('Exercise 15 result:\n', total);
