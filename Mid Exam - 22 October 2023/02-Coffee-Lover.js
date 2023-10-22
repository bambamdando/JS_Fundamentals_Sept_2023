function coffeeLover(arr) {

    let startingList = arr[0];
    let commandsCount = Number(arr[1]);
    let startingListAsArr = startingList.split(" ");

    for (let i = 2; i <= commandsCount + 1; i++) {
        let command = arr[i].split(" ");

        if (command[0] === "Include") {
            startingListAsArr.push(command[1]);
        } else if (command[0] === "Remove") {
            if (command[1] === "first") {
                let commandIdxs = Number(command[2]);
                startingListAsArr = startingListAsArr.slice(commandIdxs);
            } else if (command[1] === "last") {
                let commandIdxs = Number(command[2]);
                startingListAsArr = startingListAsArr.slice(0, -commandIdxs);
            }
        } else if (command[0] === "Prefer") {
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);

            let temp = startingListAsArr[index1];
            startingListAsArr[index1] = startingListAsArr[index2];
            startingListAsArr[index2] = temp;
        } else if (command[0] === "Reverse") {
            startingListAsArr.reverse();
        }
    }

    let resultAsStr = startingListAsArr.join(" ");

    console.log("Coffees:");
    console.log(resultAsStr);
}

coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])