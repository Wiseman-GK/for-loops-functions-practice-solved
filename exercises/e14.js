
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const wrongBal = [];
  let sumOne = 0;
  let sumTwo = 0;
  for(let g = 0; g < array.length; g++) {
    let trueBal = 0;
    if(array[g].deposits && !array[g].withdrawals){
      for(let r = 0; r < array[g].deposits.length; r++){
        sumOne += array[g].deposits[r];
      }
      trueBal = sumOne;
      if(trueBal !== array[g].balance) {
        wrongBal.push(array[g])
      }
      trueBal = 0;
      sumOne = 0;
    } 
    if(array[g].deposits && array[g].withdrawals){
      for(let r = 0; r < array[g].deposits.length; r++){
        sumOne += array[g].deposits[r];
      }
      for(let r = 0; r < array[g].withdrawals.length; r++){
        sumTwo += array[g].withdrawals[r];
      }
      trueBal = sumOne - sumTwo;
      if(trueBal !== array[g].balance) {
        wrongBal.push(array[g])
      }
      sumOne = 0;
      sumTwo = 0;
      trueBal = 0;
    }
  }
  return wrongBal;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
