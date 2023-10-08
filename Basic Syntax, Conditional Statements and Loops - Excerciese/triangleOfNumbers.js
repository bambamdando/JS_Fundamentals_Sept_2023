function triangleOfNumbers(maxRow) {

    for (let num = 1; num <= maxRow; num++) {
        console.log(`${num} `.repeat(num));
    }

}
triangleOfNumbers(6);

// function triangleOfNumbersNestedWhile(maxRow) {
//     for (let num = 1; num <= maxRow; num++) {
//         let curRow = "";

//         for (count = 1; count <= num; count++) {
//             curRow += num + " ";
//         }

//         console.log(curRow);
//     }
// }
// triangleOfNumbersNestedWhile(5);