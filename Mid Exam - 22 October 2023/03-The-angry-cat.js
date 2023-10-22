function findPreferredSide(arr, startIndex, input) {

    let number = arr[startIndex];
    let leftCheapSum = 0;
    let rightCheapSum = 0;
    let leftExpensiveSum = 0;
    let rightExpensiveSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (input === "cheap") {
            if (arr[i] < number) {
                if (i < startIndex) {
                    leftCheapSum += arr[i];
                }
                if (i > startIndex) {
                    rightCheapSum += arr[i];
                }
            }
        } else if (input === "expensive") {
            if (arr[i] >= number) {
                if (i < startIndex) {
                    leftExpensiveSum += arr[i];
                }
                if (i > startIndex) {
                    rightExpensiveSum += arr[i];
                }
            }
        }
    }

    if (input === "cheap") {
        if (leftCheapSum >= rightCheapSum) {
            console.log(`Left - ${leftCheapSum}`);
        } else {
            console.log(`Right - ${rightCheapSum}`);
        }
    } else if (input === "expensive") {
        if (leftExpensiveSum >= rightExpensiveSum) {
            console.log(`Left - ${leftExpensiveSum}`);
        } else {
            console.log(`Right - ${rightExpensiveSum}`);
        }
    }
}

findPreferredSide([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");