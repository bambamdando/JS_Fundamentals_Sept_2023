function theatrePromotions(day, years) {

    let ticketPrice = 0;

    if (day === "Weekday") {
        if (years >= 0 && years <= 18) {
            ticketPrice = 12;
        } else if (years > 18 && years <= 64) {
            ticketPrice = 18;
        } else if (years > 64 && years <= 122) {
            ticketPrice = 12;
        }
    } else if (day === "Weekend") {
        if (years >= 0 && years <= 18) {
            ticketPrice = 15;
        } else if (years > 18 && years <= 64) {
            ticketPrice = 20;
        } else if (years > 64 && years <= 122) {
            ticketPrice = 15;
        }
    } else if (day === "Holiday") {
        if (years >= 0 && years <= 18) {
            ticketPrice = 5;
        } else if (years > 18 && years <= 64) {
            ticketPrice = 12;
        } else if (years > 64 && years <= 122) {
            ticketPrice = 10;
        }
    }

    if (ticketPrice !== 0) {
        console.log(ticketPrice + '$')
    } else {
        console.log("Error!")
    }

}
theatrePromotions('Holiday', 120)