// given field size | size 3 -> [-,-,-] | size 5 -> [-,-,-,-,-]
// no ladybug -> 0 | ladybug -> 1
// given initial ladybugs indeces -> size 3 . indeces '0 2' -> [1,0,1] 
// commands -> "{ladybug index]" {direction} {fly length}" -> "0 right 2"
// while ladybug lands on fellow ladybug -> continue in same direction with same length
// if out of field -> it's gone
// if no ladybug on given index -> nothing happens

function ladyBugs(arr) {

    let fieldSize = arr[0];
    let ladybugIdxs = arr[1].split(" ").map(Number);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        if (ladybugIdxs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 2; j < arr.length; j++) {
        let command = arr[j];
        let tokens = command.split(" ");

        let ladybugIdx = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!field[ladybugIdx]) {
            continue;
        }

        field[ladybugIdx] = 0;

        if (direction == "left") {
            let newIdx = ladybugIdx - flyLength;

            if (newIdx >= 0) {
                while (field[newIdx] == 1) {
                    newIdx -= flyLength;
                }

                if (newIdx >= 0) {
                    field[newIdx] = 1;
                }
            }
        } else {
            let newIdx = ladybugIdx + flyLength;

            if (newIdx < field.length) {
                while (field[newIdx] == 1) {
                    newIdx += flyLength;
                }

                if (newIdx < field.length) {
                    field[newIdx] = 1;
                }
            }
        }
    }

    console.log(field.join(" "));
}
ladyBugs([3,
    '0 1',
    '0 right 1',
    '2 right 1']);