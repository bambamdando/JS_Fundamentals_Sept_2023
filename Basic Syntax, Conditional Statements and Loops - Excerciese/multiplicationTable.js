function multiplicationTable(num) {

    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = num * i;
        console.log(`${num} X ${i} = ${sum}`)
    }

}
multiplicationTable(2);

