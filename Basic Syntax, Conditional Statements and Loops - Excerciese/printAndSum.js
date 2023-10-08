function printAndSum(start, end) {

    let sum = 0;
    let currentNum = start;
    let output = ""

    for (let i = start; i <= end; i++) {
        output += `${currentNum} `;
        sum += currentNum;
        currentNum += 1;
    }
    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}
printAndSum(2, 15);