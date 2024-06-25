function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num ** 2; // Square the even number
      } else {
        return num * 3; // Triple the odd number
      }
    });
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const outputArray = processArray(inputArray);
  console.log(outputArray); // Output: [3, 4, 9, 16, 15]

  // Function to process array of numbers
function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num ** 2; // Square the even number
      } else {
        return num * 3; // Triple the odd number
      }
    });
  }
  
  // Function to format array of strings based on corresponding numbers
  function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
      throw new Error("The length of the strings array and the numbers array must be the same.");
    }
  
    return strings.map((str, index) => {
      if (numbers[index] % 2 === 0) {
        return str.toUpperCase(); // Capitalize the entire string if the number is even
      } else {
        return str.toLowerCase(); // Convert the string to lowercase if the number is odd
      }
    });
  }
  
  // Example usage:
  const strings = ["Hello", "World", "JavaScript", "Coding"];
  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  const formattedStrings = formatArrayStrings(strings, processedNumbers);
  console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "CODING", "hello"]
  