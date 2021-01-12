// Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

// Counting Sheep
// Linear Time (O(n)) has running times that are directly proportional to the size (n) of the input.
// It is only performing one thing as depends on the sheep count 

// Power Calculator
// Constant Time (O(1)) takes the same amount of time to complete no matter how big the input.
// It makes two checks for an exp of 0 or 1, then does a single operation

// Reverse String
// Constant Time (O(1)) takes the same amount of time to complete no matter how big the input.
// It splits the string into substrings, does a reverse, then joins them. Does not matter what the size of the string is. 

// nth Triangular Number
// Linear Time (O(n)) has running times that are directly proportional to the size (n) of the input.
// It has to loop through the number, perform an operation, then go again until the number is at 1.
// So it would need to run 8 times for 7 and 15 times for 16

// String Spliter
// Linear Time (O(n)) has running times that are directly proportional to the size (n) of the input.
// It had to loop through a string looking for a seperator at each char.
// So it would need to look at 8 chars in a 8 letter string and 16 times for a 16 letter string.

// Fibonacci
// Linear Time (O(n)) has running times that are directly proportional to the size (n) of the input.
// It takes in a number and prints an array for the Fibonacci sequence. 
// It does this by usin a For loop, so if I send in 8 my Fibonaccit sequence has eight numbers and 10 has ten numbers.

// Factorial
// Linear Time (O(n)) has running times that are directly proportional to the size (n) of the input.
// It has to perform an operation on each number before it all the way to 1.
// So if want to know the factorial of 10, I have to mutiply from 9-1. If I want the factorial of 5, only 4-1.