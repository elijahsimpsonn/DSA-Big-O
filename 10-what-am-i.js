// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// Linear Time (O(n)) has running times that are directly proportional to the size (n) of the input.
// The current run time is O(n), but the efficient version of the algorithm should be O(sqrt(n)) because you only need to check up the numbers up to the square root to see if a number is prime. You can never have a number with two factors that are both above the square root of said number.