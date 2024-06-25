// Function to create user profiles
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
      throw new Error("The length of the originalNames array and the modifiedNames array must be the same.");
    }
  
    return originalNames.map((name, index) => {
      return {
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
      };
    });
  }
  
  // Example usage:
  const originalNames = ["Alice", "Bob", "Charlie", "Diana"];
  const modifiedNames = ["ALICE", "bob", "CHARLIE", "diana"]; // Assume these are the results from formatArrayStrings
  const userProfiles = createUserProfiles(originalNames, modifiedNames);
  console.log(userProfiles);
  // Output:
  // [
  //   { id: 1, originalName: 'Alice', modifiedName: 'ALICE' },
  //   { id: 2, originalName: 'Bob', modifiedName: 'bob' },
  //   { id: 3, originalName: 'Charlie', modifiedName: 'CHARLIE' },
  //   { id: 4, originalName: 'Diana', modifiedName: 'diana' }
  // ]
  
  module.exports = createUserProfiles;
  