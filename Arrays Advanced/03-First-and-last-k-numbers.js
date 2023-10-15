function firstAndLastK(arr) {

    // let k = arr.shift()

    // let slicedArr1 = arr.slice(0, k);
    // let slicedArr2 = arr.slice(-k);

    // console.log(slicedArr1.join(" "));
    // console.log(slicedArr2.join(" "));

    // // OR

    let k = arr.shift();

    console.log(arr.slice(0, k).join(" "));
    console.log(arr.slice(-k).join(" "));

}
firstAndLastK([3, 6, 7, 8, 9]);