function consecutiveSubstrings(string) {
  let result = [];
  // loop through each starting position in the string
  for (let i=0; i < string.length; i++){
    for (let j=1; j < string.length - i+1; j++){
      result.push(string.slice(i,i+j));
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
