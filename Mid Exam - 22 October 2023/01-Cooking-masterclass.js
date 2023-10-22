function cookingMasterclass(input) {

    let budget = Number(input[0]);
    let students = Number(input[1]);
    let priceFlour = Number(input[2]);
    let priceSingleEgg = Number(input[3]);
    let priceSingleApron = Number(input[4]);

    function calc(students, priceFlour, priceSingleEgg, priceSingleApron) {
        let freepackages = Math.floor(students / 5);
        let sum = priceSingleApron * (Math.ceil(students + students * 0.20)) + priceSingleEgg * 10 * (students) + priceFlour * (students - freepackages);
        return sum;
    }
    function checkPriceVsBudget(sum) {
        if (sum <= budget) {
            return (`Items purchased for ${sum.toFixed(2)}$.`);
        } else {
            return (`${Math.abs(sum - budget).toFixed(2)}$ more needed.`);
        }
    }

    let calculation = calc(students, priceFlour, priceSingleEgg, priceSingleApron);
    let check = checkPriceVsBudget(calculation);

    console.log(check);
}
cookingMasterclass([946,
    20,
    12.05,
    0.42,
    27.89]);