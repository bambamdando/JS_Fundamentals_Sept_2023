// function integerAndFloat(num1, num2, num3) {

//     let sum = num1 + num2 + num3;
//     type = ''

//     if (sum % 1 != 0) {
//         type = "Float";
//         console.log(`${sum} - ${type}`);
//     } else {
//         type = "Integer";
//         console.log(`${sum} - ${type}`);
//     }

// }
// integerAndFloat(9, 100, 1.1);

// SECOND WAY TO FIX THE ISSUE BELOW

// function integerAndFloat(num1, num2, num3) {

//     let sum = num1 + num2 + num3;
//     let sumAsString = String(sum);

//     let isFloat = false;

//     for (let i = 0; i < sumAsString.length; i++) {
//         if (sumAsString[i] == ".") {
//             isFloat = true;
//             break;
//         }
//     }
//     console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
// }
// integerAndFloat(9, 100, 1.1);

// THIRD WAY TO FIX THE ISSUE BELOW SHORTER!

function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3
    let isFloat = sum % 1 != 0;


    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}
integerAndFloat(9, 100, 1.1);

