// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2; //equal to itself times two
    }
    return array;
}

// Linear Time (O(n)). We are going through each element in the array and performing an operation
// So thr runtime is dependant on the total items in the array.