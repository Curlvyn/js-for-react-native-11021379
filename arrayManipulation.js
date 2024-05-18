// Task 1: processArray function
function processArray(numbers) {
    const processedArray = [];
  
    for (const num of numbers) {
      if (num % 2 === 0) {
        // Even number: square it
        processedArray.push(num * num);
      } else {
        // Odd number: triple it
        processedArray.push(num * 3);
      }
    }
  
    return processedArray;
}

 // Task 2: formatArrayStrings function
function formatArrayStrings(strings, processedNumbers) {
   const formattedStrings = [];
  
    for (let i = 0; i < strings.length; i++) {
      const str = strings[i];
      const num = processedNumbers[i];
  
      if (num % 2 === 0) {
        // Even number: capitalize the string
        formattedStrings.push(str.toUpperCase());
      } else {
        // Odd number: convert the string to lowercase
        formattedStrings.push(str.toLowerCase());
      }
    }
  
    return formattedStrings;
  }


// Example usage:
const inputNumbers = [1, 2, 3, 4, 5];
const inputStrings = ['Kelvin', 'Maxwell', 'Fred', 'Kate', 'Eugenia'];

const processedResult = processArray(inputNumbers);
const formattedResult = formatArrayStrings(inputStrings, processedResult);

console.log('Processed result:', processedResult);
console.log('Formatted result:', formattedResult);

