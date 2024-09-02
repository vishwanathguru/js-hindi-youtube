const accountID = 144553
let accountEmail = "vishu@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;

// accountID= 123456 // not allowed

accountEmail = "nija@gmail.com"
accountPassword = "987456"
accountCity = "mumbai"

/*  Prefer not to use var
    beacause of issue in block scope and fuctional scope
*/

// console.log(accountID)

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
