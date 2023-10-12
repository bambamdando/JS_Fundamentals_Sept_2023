function orders(product, quantity) {

    // HARD WAY , JUST PRACTISING NESTED FUNCTIONS !

    let price = 0;

    let productPrice = productType(product);
    let totalQuantityCalc = count(quantity);

    console.log((productPrice * totalQuantityCalc).toFixed(2))

    function productType(product) {
        if (product == "water") {
            price = 1;
        } else if (product == "coffee") {
            price = 1.50;
        } else if (product == "coke") {
            price = 1.40;
        } else {
            price = 2;
        }
        return price;
    }

    function count(quantity) {
        return quantity;
    }

}
orders("coffee", 2);