
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  const depo = [];
  for(let g = 0; g < array.length; g++) {
    if(array[g].deposits) {
      for(let r = 0; r < array[g].deposits.length; r++) {
        if(array[g].deposits[r] > 100) {
          depo.push(array[g].deposits[r]);
        }
      }
    }
  }
  return depo;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
