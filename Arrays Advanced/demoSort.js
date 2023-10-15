let arr = [3, 5, 1, 7, 0, 11];

console.log(arr);
arr.sort(compare);
console.log(arr);

function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }

    // return a-b; // can be used instead above to sort in numbs in ascending row
    // return b-a; // can be used instead above to sort in numbs in descending row

} 
