function login(input) {

    // // password can get reveres by another longer method as follows below:

    // let username = input[0];
    // let password = ""

    // for (let i = username.length - 1; i >= 0; i--) {
    //     password += username[i];

    // }
    // console.log((password));


    let username = input[0];
    let password = username.split('').reverse().join('');
    let attempts = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] !== password) {
            attempts++;
            if (attempts === 4) {
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`User ${username} logged in.`);
            return;
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);