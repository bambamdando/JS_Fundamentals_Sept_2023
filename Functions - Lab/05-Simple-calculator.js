function simpleCalculator(num1, num2, operator) {

    console.log(calculate(num1, num2, operator));

    function calculate(num1, num2, operator) {
        switch (operator) {
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
        }
    }
}
simpleCalculator(5, 5, "multiply");