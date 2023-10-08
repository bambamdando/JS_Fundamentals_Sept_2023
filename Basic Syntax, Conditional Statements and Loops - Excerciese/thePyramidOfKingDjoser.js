function pyramid(baseSize, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;
    let floor = 1;

    for (let currentSize = baseSize; currentSize > 0; currentSize -= 2) {
        height += increment;
        let totalArea = currentSize ** 2;

        if (currentSize <= 2) {
            gold = totalArea * increment;
        } else {

            let stoneArea = (currentSize - 2) ** 2;
            stone += stoneArea * increment;

            if (floor % 5 === 0) {
                let lapisArea = totalArea - stoneArea;
                lapis += lapisArea * increment;
            } else {
                let marbeArea = totalArea - stoneArea;
                marble += marbeArea * increment;
            }

        }
        floor++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}
pyramid(11, 1)