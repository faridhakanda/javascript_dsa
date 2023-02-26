// find minimum number of the given array
function find_min(A) {
    let i, min = 100000;
    for (i = 0; i < A.length; i++){
        if (A[i] < min){
            min = A[i];
        }
    }
    return min;
}

A = [8, 19, 10, 9, 1, 2, 5, 8, 100, 38];
console.log("Minimum number of the array is: "+find_min(A));