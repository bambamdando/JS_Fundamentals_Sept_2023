function triplesOfLatinLetters(n) {

    let startCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let firstChar = String.fromCharCode(startCharCode + i);
                let secondChar = String.fromCharCode(startCharCode + j);
                let thirdChar = String.fromCharCode(startCharCode + k);
                console.log(`${firstChar}${secondChar}${thirdChar}`);
            }
        }
    }
}
triplesOfLatinLetters(3)