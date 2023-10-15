function dungeonestDark(arr) {

    let startingHP = 100;
    let stargingCoins = 0;
    let monsterName = "";
    let roomCounter = 1;

    let arrToStr = arr.toString();
    let modified = arrToStr.split("|");

    for (let command of modified) {
        let commandToArr = command.split(" ");

        if (commandToArr[0] == "potion") {
            let healedAmount = Math.min(100 - startingHP, Number(commandToArr[1]));
            startingHP += healedAmount;

            console.log(`You healed for ${healedAmount} hp.`);
            console.log(`Current health: ${startingHP} hp.`)
        } else if (commandToArr[0] == "chest") {
            stargingCoins += Number(commandToArr[1]);
            console.log(`You found ${Number(commandToArr[1])} coins.`);
        } else {
            monsterName = commandToArr[0];
            startingHP -= Number(commandToArr[1]);
            if (startingHP > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                break;
            }
        }

        roomCounter++;
        if (roomCounter > modified.length) {
            console.log("You've made it!");
            console.log(`Coins: ${stargingCoins}`);
            console.log(`Health: ${startingHP}`);
            return;
        }
    }
    console.log(`Best room: ${roomCounter}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);