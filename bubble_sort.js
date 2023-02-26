// bubble sort implementation using javascript
function bubble_sort(A) {
    let i, j, t;
    for (i = 0; i < A.length; i++) {
        for (j = 0; j < A.length-1; j++) {
            if (A[j] > A[j+1]) {
                t = A[j];
                A[j] = A[j+1];
                A[j+1] = t;
            }
        }
    }
}

A = [3, 10, 9, 100, 92, 51, 1, 2, 4, 5, 8, 6, 9];
bubble_sort(A)
console.log(A)
