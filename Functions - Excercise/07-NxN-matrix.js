function matrix(n) {

    for (let rowNum = 1; rowNum <= n; rowNum++) {
        let curRow = `${n} `.repeat(n);
        console.log(curRow);
    }

}
matrix(7);