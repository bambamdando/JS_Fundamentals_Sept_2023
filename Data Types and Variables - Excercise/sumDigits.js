// function sumDigits(num) {

//     let sum = 0;

//     for (let i = 0; i < num.toString().length; i++) {
//         sum += Number(num.toString()[i]);
//     }
//     console.log(sum)

// }
// sumDigits(245678)

// SECOND WAY WITH WHILE LOOP

function sumDigits(num) {

    let sum = 0;

    while (num != 0) {
        let units = num % 10;
        num -= units;
        num /= 10;

        sum += units;
    }
    console.log(sum);
}
sumDigits(245678)