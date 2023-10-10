function arrayRotation(arr, rotations) {

    let curNum = 0;

    for (let i = 0; i < rotations; i++) {

        curNum = arr[0];
        arr.shift();
        arr.push(curNum);

    }

    console.log(arr.join(" "));

}
arrayRotation([51, 47, 32, 61, 21], 2);
