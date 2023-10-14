function negativeOrPositive(arr) {

    // let result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < 0) {
    //         result.unshift(arr[i])
    //     } else {
    //         result.push(arr[i])
    //     }
    // }

    // console.log(result.join("\n")); // that's how you join elements from array to string each element from index on a new row \n

    let result = [];

    for (let numAsString of arr) {
        let num = Number(numAsString);

        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }

    for (let num of result) {
        console.log(num)
    }

}
negativeOrPositive(['7', '-2', '8', '9']);