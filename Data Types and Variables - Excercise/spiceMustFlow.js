function spiceMustFlow(startingYield) {

    let daysOperate = 0;
    let workersConsumption = 26;
    let currentYieldinMine = startingYield;
    let storageYield = 0;
    let yieldExhaustion = 10;

    if (startingYield < 100) {
        console.log(daysOperate)
        console.log(storageYield)
        return;
    }

    while (currentYieldinMine >= 100) {
        if (startingYield >= 100) {

            storageYield += Number(currentYieldinMine);
            currentYieldinMine -= yieldExhaustion;
            storageYield -= workersConsumption;
            daysOperate++
        }
    }
    if (currentYieldinMine < 100 && currentYieldinMine >= workersConsumption) {
        storageYield -= workersConsumption;
    }

    console.log(daysOperate);
    console.log(storageYield);
}
// spiceMustFlow([111]);
spiceMustFlow([80]);