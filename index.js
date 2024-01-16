function hasTargetSum(array, target) {
  // Pseudocode:
  // Iterate through each element in the array
  // For each element, check if there is another element in the array
  // such that the sum of the current element and the other element is equal to the target
  // If such a pair is found, return true
  // If no such pair is found, return false

  // Code:
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Big O time complexity: O(n^2) - Quadratic time complexity due to nested loops.

  Explanation:
  - The function uses a brute-force approach with nested loops.
  - The outer loop iterates through each element in the array.
  - The inner loop, starting from the next element, checks if the sum of the current pair equals the target.
  - If a pair is found, the function returns true; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
