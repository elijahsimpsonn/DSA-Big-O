// What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// Constant Time O(1). There is only one input and you are doing one operation on it. 