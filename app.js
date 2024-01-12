
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * .87;
    return valueInPound;}



// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }


// function fromDollarToYen(USD, JPY) {
//     return USD*JPY;
// };


// function fromEuroToDollar(EUR, USD) {
//     return EUR*USD;
// };


// function fromYenToPound(JPY, GBP) {
//     return JPY*GBP;
// };


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }