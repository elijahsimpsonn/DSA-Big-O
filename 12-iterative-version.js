// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively. 

// 1. Counting Sheep

// Write a recursive function that counts how many sheep jump over the fence. 
// Your program should take a number as input. That number should be the number of sheep you have. 
// The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

//     Input: 3
//     Output:
//         3: Another sheep jumps over the fence
//         2: Another sheep jumps over the fence
//         1: Another sheep jumps over the fence
//         All sheep jumped over the fence


const sheepCount = (int) => {
    let start = int
    for (let i = start; i <= start; i--) {

        if (i === 0){ return ('All the sheep have jumped over the fence') }
        else console.log(`Sheep number ${i} jumps over the fence`)
    }
}

console.log(sheepCount(3))

//------------------------------------------------------------------------------------//

// 2. Power Calculator

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
// The function returns the value of the base raised to the power of the exponent. 
// Use only exponents greater than or equal to 0 (positive numbers)

//     powerCalculator(10,2) should return 100
//     powerCalculator(10,-2) should return exponent should be >= 0


const powerCalculator = (number, exponent) => {
    if (exponent < 0){
                return 'Exponent should be >= 0'
            } else if (exponent === 0){
                return 1
            }

    return number ** exponent
}

console.log(powerCalculator(10, 2))

//------------------------------------------------------------------------------------//


// 3. Reverse String

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.


const reverseString = (string) => {
    return string.split("").reverse().join("")
}

console.log(reverseString("Elijah"))

//------------------------------------------------------------------------------------//


// 4. nth Triangular Number

// Calculate the nth triangular number. 
// A triangular number counts the objects that can form an equilateral triangle. 
// The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. 
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.


const nth = (number) => {
    let start = number
    for (let i = number - 1; i <= number; i--) {
        if(i === 0) {return start}
        else{start += i}
    }
}

console.log(nth(8))

//------------------------------------------------------------------------------------//


// 5. String Splitter

// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
// Don't use JS array's split function to solve this problem.

//     Input: 02/20/2020
//     Output: ["02", "20", "2020"]

var stringSpliter = function (string, seperator) {
    let stringArray = [''];
    let j = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == seperator) {
            j++;
            stringArray.push('');
        } else {
            stringArray[j] += string.charAt(i);
        }
    }
    return stringArray;
}

console.log(stringSpliter('02/20/2020', '/'))


//------------------------------------------------------------------------------------//


// 6. Fibonacci

// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = (number) => {
    const result = [1, 1]
    for (let i = 2; i <= number; i++) {
        result.push(result[i - 1] + result[i - 2])
    } return result
}

console.log(fibonacci(8))


//------------------------------------------------------------------------------------//


// 7. Factorial

// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by each number between itself and 1. 
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = (number) => {
    if (number <= 0) return ('Must be 1 or more')
    for (let i = number - 1; i >= 1; i--) {
        number *= i
    }
    return number
}

console.log(factorial(5))

//------------------------------------------------------------------------------------//

