function signCheck(numOne, numTwo, numThree) {
    let negativeCount = 0;

    ifNegative(numOne, numTwo, numThree)
    modulo(negativeCount);


    function ifNegative(numOne, numTwo, numThree) {
        if (numOne < 0) {
            negativeCount++;
        }

        if (numTwo < 0) {
            negativeCount++;
        }

        if (numThree < 0) {
            negativeCount++;
        }
        return negativeCount;
    }

    function modulo(negativeCount) {
        if (negativeCount % 2 === 0) {
            console.log("Positive");
        } else {
            console.log("Negative");
        }
    }
}
signCheck(5, 12, -15);