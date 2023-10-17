// function loadingBar(num) {

//     if (num == 0) {
//         console.log(`${num}% [..........]`);
//         console.log("Still loading...");
//     } else if (num == 10) {
//         console.log(`${num}% [%.........]`);
//         console.log("Still loading...");
//     } else if (num == 20) {
//         console.log(`${num}% [%%........]`);
//         console.log("Still loading...");
//     } else if (num == 30) {
//         console.log(`${num}% [%%%.......]`);
//         console.log("Still loading...");
//     } else if (num == 40) {
//         console.log(`${num}% [%%%%......]`);
//         console.log("Still loading...");
//     } else if (num == 50) {
//         console.log(`${num}% [%%%%%.....]`);
//         console.log("Still loading...");
//     } else if (num == 60) {
//         console.log(`${num}% [%%%%%%....]`);
//         console.log("Still loading...");
//     } else if (num == 70) {
//         console.log(`${num}% [%%%%%%%...]`);
//         console.log("Still loading...");
//     } else if (num == 80) {
//         console.log(`${num}% [%%%%%%%%..]`);
//         console.log("Still loading...");
//     } else if (num == 90) {
//         console.log(`${num}% [%%%%%%%%%.]`);
//         console.log("Still loading...");
//     } else {
//         console.log(`${num}% Complete!`);
//         console.log("[%%%%%%%%%%]");
//     }

function loadingBar(number) {

    let procentages = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${procentages}]`);
    } else {
        console.log(`${number}% [${procentages}${dots}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30);