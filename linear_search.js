// linear search implementation using javascript

function linear_search(A, target) {
    let i;
    for (i = 0; i < A.length; i++) {
        if (A[i] === target) {
            return i;
        }
    }
    return -1;
}

A = [2, 5, 1, 12, 19, 10, 9, 7, 3, 4, 6, 8];
console.log("Target number index is: "+linear_search(A, 10));