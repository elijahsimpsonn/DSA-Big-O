# Big O Notation Drills

## Key Concepts

- <b>Space Complexity</b> refers to the amount of physical memory that an algorithm requires to complete.
- <b>Time Complexity</b> refers to the number of operations an algorithm requires to complete. 
- <b>Big O Notation</b> is a way of describing the time complexity of an algorithm. 
- <b>Linear Relationship</b> is when two different things (example being an operation and a loop) grow in direct, linear proportion to each other.
- <b>Constant Time (O(1))</b> takes the same amount of time to complete no matter how big the input. The "holy grail".
- <b>Logarithmic Time (O(log(n)))</b> takes longer with larger inputs, but running time increases slowly. Cuts the problem size in half each round. Next best thing after Constant Time (O(1)).
- <b>Linear Time (O(n))</b> has running times that are directly proportional to the size (n) of the input.
- <b>Polynomial Time (O(n^k))</b> has a running time that would be some input size <b>n</b> raised to some constant power <b>k</b>.
- <b>Exponential Time (O(2^n))</b> has running times that grow rapidly with any increase in input size.

## Examples

- <b>O(1)</b> - Examples of O(1) algorithms are accessing an array item or performing basic arithmetic operations (e.g., adding 2 numbers).

<br/>

- <b>O(log(n))</b> - A good example of a (O(log(n))) algorithm is looking up people in a phonebook. You don't need to check every person in the phone book to find the right one; instead, you can simply divide-and-conquer by looking based on where their name is alphabetically, and in every section you only need to explore a subset of each section before you eventually find someone's phone number. Of course, a bigger phone book will still take you a longer time, but it won't grow as quickly as the proportional increase in the additional size. Remember that:
    - the choice of the next element on which to perform some action is one of several possibilities
    - only one will need to be chosen.
    OR
    - the elements on which the action is performed are digits of n

<br/>

- <b>O(n)</b> - Some examples of O(n) algorithms are summing the elements in an array and finding the minimum or maximum value in an array.

<br/>

- <b>O(n^k)</b> - The easiest way to understand polynomial time complexity is with nested loops. An algorithm that requires 2 levels of looping over an input would be O(n^2) while one requiring 3 levels of looping would be O(n^3). In both cases, we have polynomial time complexity.

<br/>

- <b>O(2^n)</b> - For an input of size 2, an exponential time algorithm will take 2^2 = 4 time. With an input of size 10, the same algorithm will take 2^10 = 1024 time, and with an input of size 100, it will take 2^100 = 1.26765060022823 * 1030 time. Algorithms with running time O(2^n) are often recursive algorithms that solve a problem of size N by recursively solving two smaller problems of size N-1.

## Time Complexity Graph 
<img src="https://i.ibb.co/XSVbh7j/BigO.png">

## Operations Required By Different Time Complexities

<img src="https://i.ibb.co/D5jX4Pg/timecomplextable.png">

## Resources

- <a href="https://tf-assets-prod.s3.amazonaws.com/tf-curric/data-science/Thinksheet-BigO.pdf"><b>Cheetsheet</b></a>
- <a href="https://www.youtube.com/watch?v=itn09C2ZB9Y"><b>Web Dev Simplified</b></a>
- <a href="https://www.youtube.com/watch?v=IM9sHGlYV5A"><b>CS50 Computational Complexity Video</b></a>
- <a href="https://www.youtube.com/watch?v=v4cd1O4zkGw"><b>HackerRank Big O Notation Video</b></a>

## Drills Overview

In these drills, you'll practice determining the big O complexity of algorithms. For each drill, we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing the code without running it.

### 1. What is the Big O for this?

1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

### 2. Even Or Odd

What is the Big O of the following algorithm? Explain your answer

```function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
```

### 3. Are You Here?

What is the Big O of the following algorithm? Explain your answer

```function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

### 4. Doubler

What is the Big O of the following algorithm? Explain your answer

```function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

### 5. Naive Search

What is the Big O of the following algorithm? Explain your answer

```function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

### 6. Creating Pairs

What is the Big O of the following algorithm? Explain your answer

```function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

### 7. Compute The Sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

```function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

### 8. An Efficient Search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

### 9. Random Element

What is the Big O of the following algorithm? Explain your answer

```function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

### 10. What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

### 11. Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

- There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
    
- The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: 
    - Only one disk may be moved at a time 
    - Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. 
    - A larger disk may not placed on top of a smaller disk.

<img src="https://i.ibb.co/Qr15JH5/hanoi.png">

Your Task:

- Derive an algorithm to solve the Tower of Hanoi puzzle.
- Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
- If you are given 5 disks, how do the rods look like after 7 recursive calls?
- How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
- What is the runtime of your algorithm?


### 12. Iterative Version

Solve the drills JS File 12 iteratively instead of recursively.

### 13 Recursive Big O

Take the solutions from <a href="https://github.com/elijahsimpsonn/DSA-Recursion">this</a> repo and identify the time complexities (big O) of each of them.

### 14. Iterative Big O

Take your solutions from the iterative exercises drills in JS File 12 and identify the time complexities (big O) of each of them.

