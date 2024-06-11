const account_Id = 12345;
let account_Name = 'Ram';
var account_Password = '123456789';
account_City = 'Gorakhpur';

// account_Id = 456789;
console.log(account_Id);

account_Name = 'Shyam';
account_Password = 456789123;
account_City = 'GKP';

/*
Prefer not to use var because of
its block scope and functional scope
*/
console.table([account_Name, account_Password, account_City])