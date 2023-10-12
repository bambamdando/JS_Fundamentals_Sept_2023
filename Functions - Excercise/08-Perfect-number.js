function perfectNum(n) {
    let sumProperDivisors = 0;

    for (let divisor = 1; divisor < n; divisor++) {
        if (n % divisor == 0) {
            sumProperDivisors += divisor;
        }
    }

    if (sumProperDivisors == n) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.'); // method \ to ESCAPE while using single brackets '' for console log and you have such border case like this
    }
}

perfectNum(6);