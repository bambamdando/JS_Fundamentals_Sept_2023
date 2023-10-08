function lowerOrUpper(letter) {

    let code = letter.charCodeAt();

    if (code >= "65" && code <= "90") {
        console.log("upper-case")
    } else {
        console.log("lower-case")
    }

}

//     if (letter >= "A" && letter <= "Z") {
//         console.log("upper-case")
//     } else {
//         console.log("lower-case")
//     }

// }
lowerOrUpper('L');