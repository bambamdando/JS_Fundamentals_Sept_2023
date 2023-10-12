function mathPower(num, exponent) {

    // let result = Math.pow(num, exponent) // TOO EASY
    // console.log(result)

    let result = 1;

    for (let i = 1; i <= exponent; i++) {
        result *= num;
    }

    console.log(result)
}
mathPower(2, 12);