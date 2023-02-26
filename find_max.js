function find_max(A) {
    let i, max = 0;
    for (i = 0; i < A.length; i++) {
        if (max < A[i]) {
            max = A[i];
        }
    }
    return max;
}

A = [3, 5, 10, 100, 93, 1, 4, 7, 8, 500, 38];
let max = find_max(A);
console.log("Maximum number is: "+max);