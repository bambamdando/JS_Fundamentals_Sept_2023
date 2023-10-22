function customSort(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let finalArr = [];

    let min = 0;
    let max = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        toStr = sortedArr.toString();
        max = Math.max((toStr));
        finalArr.push(max);
        min = Number(toStr);
        finalArr.push(min);
    }

    console.log(finalArr);
    console.log(toStr)

}
customSort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);