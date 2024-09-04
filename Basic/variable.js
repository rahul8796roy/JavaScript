/*
prefer not used to var because of issue in block scope and functional scope 
*/

const accountId = 12205085
let accountEmail = "rahulicai4@gmail.com"
var accountpassword = "12345"
accountCity = "Darbhanga"
 let accountState;

//accountId = 2

accountEmail = "rahullpu4@gmail.com"
accountpassword = "1234"
accountCity = "Patna"

console.table([accountId, accountEmail, accountpassword, accountCity, accountState])