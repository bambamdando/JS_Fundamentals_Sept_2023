function requiredReading(pages, pagesPerHour, days) {

    let total = pages / pagesPerHour;
    let neededDays = total / days;

    console.log(neededDays);


}
requiredReading(212, 20, 2);