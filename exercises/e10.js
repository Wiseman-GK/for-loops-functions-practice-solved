// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let letterName = [];
  for(let g = 0; g < array.length; g++) {
    let accName = array[g].name;
    for(let a of accName) {
      let letterIn = false;
      if (a == letter){
        letterIn = true;
      } else if (a == letter.toUpperCase()) {
        letterIn = true;
      }
      if (letterIn) {
        letterName.push(array[g].name);
      }
    }
  }
  return letterName;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
