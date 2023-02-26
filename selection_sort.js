// selection sort implementation using javascript

function selection_sort(A) {
    let i, j, t, index;
    for(i = 0; i < A.length; i++) {
        index = i;
        for (j = i+1; j < A.length; j++) {
            if (A[j] < A[index]) {
                index = j;
            }
        }
        if (index != i) {
            t = A[i];
            A[i] = A[index];
            A[index] = t;
        }
    }
}

A = [3, 10, 19, 1, 2, 4, 5, 8, 9, 100, 83];
selection_sort(A);
console.log(A);