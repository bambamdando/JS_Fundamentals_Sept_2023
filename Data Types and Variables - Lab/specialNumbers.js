function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let number = i;
        let sumOfDigits = 0;

        while (number > 0) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10);
        }

        let isSpecial = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;

        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}
specialNumbers(15);