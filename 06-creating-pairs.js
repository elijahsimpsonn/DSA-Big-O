// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// Polynomial Time O(n^k). This is a nested loop. O(n^k) has a running time that would be some input size raised to some constant power. 
// An algorithm that requires 2 levels of looping over an input would be O(n^2)