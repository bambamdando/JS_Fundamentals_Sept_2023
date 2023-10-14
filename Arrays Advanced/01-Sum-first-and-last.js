function sumFirstAndLast(arr) {

    let first = Number(arr.shift());
    let last = Number(arr.pop());

    console.log(first + last);

}
sumFirstAndLast(["10", "30", "60", "90"]);