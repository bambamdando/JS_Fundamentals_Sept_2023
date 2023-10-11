function oddAndEvenSum(num) {

    let numAsStr = num.toString()

    let [evenSum, oddSum] = calculate(numAsStr); // destruction of array

    console.log("Odd sum = " + oddSum + ", " + "Even sum = " + evenSum);

    function calculate(str) {
        let evenSum = 0;
        let oddSum = 0;

        for (let char of str) {
            let digit = Number(char);

            if (char % 2 == 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }

        return [evenSum, oddSum];
    }
}
oddAndEvenSum([1000435]);
// oddAndEvenSum([3495892137259234]);
