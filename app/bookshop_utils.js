function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, secondName) {
    // return firstName + " " + secondName;
    return `${firstName} ${secondName}`;
}

function makeHalfPrice(price) {
    return price / 2;
}

function countBooks(bookList) {
    return bookList.length;
}

function isInStock(book) {
    const quantity = book.quantity;
    if(quantity >= 1) {
        return true;
    }
    else {
        return false;
    }
}


function getTotalOrderPrice(price, quantity) {
    return 1.2 * (price * quantity);
}


module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};