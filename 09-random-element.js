// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Constant Time (O(1)) takes the same amount of time to complete no matter how big the input. 