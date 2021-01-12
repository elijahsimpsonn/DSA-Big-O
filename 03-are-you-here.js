// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// Polynomial Time O(n^k). This is a nested loop. O(n^k) has a running time that would be some input size raised to some constant power. 
// An algorithm that requires 2 levels of looping over an input would be O(n^2)