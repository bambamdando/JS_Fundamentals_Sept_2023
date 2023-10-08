function gladiator(lostFights, helmetCost, swordCost, shieldCost, armourCost) {

    let lostFightsCounter = 1;
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armour = 0;

    let shieldBreaks = 0;

    while (true) {
        if (lostFightsCounter % 2 == 0) {
            helmet += helmetCost;
        }
        if (lostFightsCounter % 3 == 0) {
            sword += swordCost;
        }
        if (lostFightsCounter % 2 == 0 && lostFightsCounter % 3 == 0) {
            shield += shieldCost;
            shieldBreaks++;
        }
        if (shieldBreaks % 2 == 0 && shieldBreaks > 0) {
            armour += armourCost
            shieldBreaks = 0;
        }

        lostFightsCounter++;

        if (lostFightsCounter > lostFights) {

            let expenses = helmet + sword + shield + armour;
            console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
            return;
        }
    }
}
gladiator(23, 12.50, 21.50, 40, 200);