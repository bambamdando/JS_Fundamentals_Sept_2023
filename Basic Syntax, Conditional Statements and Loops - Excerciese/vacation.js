function vacation(group, type, day) {

    let pricePerPerson = 0;

    if (day == "Friday") {
        if (type == "Students") {
            pricePerPerson = 8.45;
        } else if (type == "Business") {
            pricePerPerson = 10.90;
        } else {
            pricePerPerson = 15;
        }
    } else if (day == "Saturday") {
        if (type == "Students") {
            pricePerPerson = 9.80;
        } else if (type == "Business") {
            pricePerPerson = 15.60;
        } else {
            pricePerPerson = 20;
        }
    } else {
        if (type == "Students") {
            pricePerPerson = 10.46;
        } else if (type == "Business") {
            pricePerPerson = 16;
        } else {
            pricePerPerson = 22.50;
        }
    }

    let totalGroupPrice = group * pricePerPerson;

    if (type == "Students" && group >= 30) {
        totalGroupPrice *= 0.85;
    } else if (type == "Business" && group >= 100) {
        totalGroupPrice = totalGroupPrice - (10 * pricePerPerson);
    } else if (type == "Regular" && group >= 10 && group <= 20) {
        totalGroupPrice *= 0.95;
    }

    console.log(`Total price: ${totalGroupPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
