let arr = [10, 20, 30, 40, 50];

console.log(arr.map(x => x + 1)); // method with .map in-build tool + arrow function
console.log(map(arr, x => x + 1));

function map(inputArr, func) {

    let result = [];

    for (let item of inputArr) {
        let newItem = func(item);
        result.push(newItem);
    }

    return result;
}

// function increment(x) {
//     return x + 1;
// }

// you can use another function to serve as function or operation while mapping
