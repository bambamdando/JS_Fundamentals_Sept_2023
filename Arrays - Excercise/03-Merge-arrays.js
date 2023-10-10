function mergeArrays(arr1, arr2) {

    let arr3 = [];
    let sum = 0;
    let concatenation = "";


    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 == 0 || i == 0) {
            sum = Number(arr1[i]) + Number(arr2[i]);
            arr3.push(sum);
        } else {
            concatenation = arr1[i] + arr2[i]
            arr3.push(concatenation);
            concatenation = "";
        }

    }
    console.log(arr3.join(" - "));

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);