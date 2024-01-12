// // let oneEuroIs = {
// //     "JPY": 156.5, // japan yen
// //     "USD": 1.07, // us dollar
// //     "GBP": 0.87, // british pound
// // }

// // let fromDollarToYen = JPY
// // const 

// // function multiply(USD, JPY) {
// //     let fromDollarToYen = JPY
// //     return(USD * JPY)
// // }

// // module.exports.multiply
// let dollar = 1
// let yen = 156.5
// function fromDollarToYen(dollar, yen) {
//     return dollar*yen;
// };

// let euro = 1
// let dollarToEuro= 1.11
// function fromEuroToDollar(euro, dollar) {
//     return euro*dollar;
// };

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };
