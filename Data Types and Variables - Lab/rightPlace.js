function rightPlace(first, symbol, match) {

    let result = ""

    for (let i = 0; i < first.length; i++) {
        if (first[i] == "_") {
            result += symbol;
        } else {
            result += first[i];
        }
    }
    if (result == match) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'I', 'Strong')
