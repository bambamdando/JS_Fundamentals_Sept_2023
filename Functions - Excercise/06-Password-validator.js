function passwordValidator(pass) {
    let isValidLength = checkValidPassLength(pass);
    let isOnlyLettersDiggit = checkOnlyLettersDigits(pass);
    let isMin2Digits = checkMin2Digits(pass);

    if (isValidLength && isOnlyLettersDiggit && isMin2Digits == true) {
        console.log("Password is valid");
    }


    function checkValidPassLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyLettersDigits(pass) {
        for (let curChar of pass) {
            let code = curChar.charCodeAt();

            if (!((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function checkMin2Digits(pass) {
        let digitsCount = 0;

        for (let curChar of pass) {
            let code = curChar.charCodeAt();
            if (code >= 48 && code <= 57) {
                digitsCount++;
            }
        }

        if (digitsCount < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
}
passwordValidator('Pa$s$s')