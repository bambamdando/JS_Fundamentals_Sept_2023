function amazingNumbers(num) {

    num = num.toString();
    let sum = 0;

    for (let i = 0; i <= num.length - 1; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString()

    if (result.includes("9")) {
        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(999)