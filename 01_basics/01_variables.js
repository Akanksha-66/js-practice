const accountId = 14551    // const ki value change nhi hoti
let accountEmail = "akanksha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2   (changes to const is not allowed)
accountEmail = "hcdk@gmail.com"
accountPassword = "2345"
accountCity = "Delhi"  //variable can also be declared like this in js but is not a good way to use
let accountState;  //we can use ; or not based on our preference in js


console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  // (.table is used to print multiple logs at the same time in the form of a table)

