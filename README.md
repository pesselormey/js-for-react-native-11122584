Task 1: `processArray` Function

Objective
Create a function `processArray` that takes an array of numbers and returns a new array where each even number is squared and each odd number is tripled.

Explanation
- The function iterates over the input array.
- For each element:
  - If the element is even, it squares the number.
  - If the element is odd, it triples the number.
- It returns a new array with the processed values.

Example
Input: `[1, 2, 3, 4]`
Output: `[3, 4, 9, 16]`


Task 2: `formatArrayStrings` Function

Objective
Create a function `formatArrayStrings` that takes two arrays: an array of strings and an array of numbers (processed by `processArray`). It modifies each string based on its corresponding number.

Explanation
- The function takes two arrays as arguments:
  - `stringsArray`: an array of strings.
  - `numbersArray`: an array of numbers processed by `processArray`.
- For each string:
  - If the corresponding number is even, capitalize the entire string.
  - If the corresponding number is odd, convert the string to lowercase.
- It returns the modified array of strings.

Example
Input: `(["apple", "banana"], [4, 9])`
Output: `["APPLE", "banana"]`


Task 3: `createUserProfiles` Function

Objective
Create a function `createUserProfiles` that takes an array of original names and an array of modified names (from `formatArrayStrings`), and returns an array of objects containing `originalName`, `modifiedName`, and `id`.

Explanation
- The function takes two arrays:
  - `namesArray`: an array of original names.
  - `modifiedNamesArray`: an array of modified names.
- It returns an array of objects where each object contains:
  - `originalName`: the original name from `namesArray`.
  - `modifiedName`: the modified name from `modifiedNamesArray`.
  - `id`: an auto-incremented ID starting from 1.

Example
Input: `(["Alice", "Bob"], ["ALICE", "bob"])`
Output: `[{ originalName: "Alice", modifiedName: "ALICE", id: 1 }, { originalName: "Bob", modifiedName: "bob", id: 2 }]`



Task 4: Add a README File

Objective
Create a README file to provide essential information about your project.

Explanation
- The README file is the main documentation for your project.
- It includes the project’s purpose, setup instructions, usage examples, contribution guidelines, license information, and contact details.

Key Sections
1. Title: Project name.
2. Description: Brief overview of the project.
3. Installation: Setup and installation instructions.
4. Usage: How to use the project.
5. Contributing: Contribution guidelines.
6. License: License information.
7. Contact: Maintainer contact details.

Example Commands
1. Create: `touch README.md`
2. Edit: Add project details.
3. Commit: `git add README.md`, `git commit -m "Add README file"`, `git push origin main`

The README file ensures users and contributors understand and can effectively use your project.

enJOY!
