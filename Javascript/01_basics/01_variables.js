const accountId = 1234
let accountEmail = "sanjana2000@gmail.com"
var accountPassword = "Sanjana"
accountCity = "Delhi"
let accountState;

console.log("before change")

console.table([accountId, accountEmail, accountPassword, accountPassword])
// accountId = 4567
// constant variables can't be changeable

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "sanjana@gmail.com"
accountPassword = "Sanju"
accountCity = "Chandigarh"
console.log("After change");

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])