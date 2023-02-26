function insertion_sort(A) {
    let i, j, t;
    for (i = 0; i < A.length; i++) {
        t = A[i];
        j = i - 1;
        while (j >= 0 && A[j] > t) {
            A[j+1] = A[j];
            j = j - 1
        }
        A[j+1] = t;
    }
}

A = [3, 5, 1, 19, 10, 11, 2, 4, 6, 8, 9];
insertion_sort(A);
console.log(A)