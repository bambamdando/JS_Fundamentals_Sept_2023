function charactersInRange(char1, char2) {

    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    printResult(minCode, maxCode) // not really needed , just excercising using nested functions

    function printResult(minCode, maxCode) {
        let result = "";

        for (let i = minCode + 1; i < maxCode; i++) {
            let curChar = String.fromCharCode(i);
            result += curChar + " ";
        }

        console.log(result);

    }
}
// charactersInRange('a', 'd');
// charactersInRange("#", ":");
charactersInRange("C", "#");