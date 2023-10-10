function addAndSubtract(arr) {

    let newArr = [];
    let sumOldArr = 0;
    let sumNewArr = 0;

    let curNum = 0;

    for (let i = 0; i < arr.length; i++) {
        curNum = Number(arr[i]);
        sumOldArr += curNum;

        if (curNum % 2 == 0) {
            curNum += i;
            newArr.push(curNum);
        } else {
            curNum -= i;
            newArr.push(curNum);
        }

        sumNewArr += curNum;

    }
    console.log(newArr);
    console.log(sumOldArr);
    console.log(sumNewArr);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);