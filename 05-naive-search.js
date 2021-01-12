// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// Logarithmic Time O(n) because we are looking at each item to see if it matches. The run time is dependant on the number of items in the array.