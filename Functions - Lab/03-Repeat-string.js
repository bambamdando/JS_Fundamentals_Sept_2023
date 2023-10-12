function repeatString(string, repeater) {

    // return (string.repeat(repeater)); // TOO EASY

    let tempResult = []
    let calc = calculations(string);

    console.log(calc);

    function calculations(string) {

        for (let i = 0; i < repeater; i++) {
            tempResult.push(string);

        }

        let tempResultToStr = tempResult.join("")
        return tempResultToStr;
    }
}
repeatString("abc", 3);