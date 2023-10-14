function magicSum(arr, b) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Number(arr[i]) + Number(arr[j]) === Number(b)) {
                console.log(arr[i] + ` ` + arr[j]);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27); 