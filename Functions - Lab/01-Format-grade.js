function formatGrade(grade) {

    let result;

    if (grade < 3) {
        result = "Fail"
        grade = 2;
    } else if (grade < 3.50) {
        result = "Poor"
        grade = grade.toFixed(2);
    } else if (grade < 4.50) {
        result = "Good"
        grade = grade.toFixed(2);
    } else if (grade < 5.50) {
        result = "Very good"
        grade = grade.toFixed(2);
    } else {
        result = "Excellent"
        grade = grade.toFixed(2);
    }

    console.log(`${result} (${grade})`);

}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);
