

// Function to calculate the sum of all elements in the array
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Function to calculate the average of all elements in the array
  function average(arr) {
    return sum(arr) / arr.length;
  }
  
  // Function to find the maximum value in the array
  function max(arr) {
    return Math.max(...arr);
  }
  
  // Function to find the minimum value in the array
  function min(arr) {
    return Math.min(...arr);
  }
  
  // Function to get an array with only unique elements
  function unique(arr) {
    return [...new Set(arr)];
  }
  
  // Function to shuffle the elements of the array randomly
  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  
  // Function to sort the array in ascending order
  function sortAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // Function to sort the array in descending order
  function sortDesc(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
  
  // Function to split the array into smaller chunks of a specified size
  function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  }
  
  // Function to map each element of the array with its index
  function mapWithIndex(arr, callback) {
    return arr.map((element, index) => callback(element, index));
  }
  
  module.exports = {
    sum,
    average,
    max,
    min,
    unique,
    shuffle,
    sortAsc,
    sortDesc,
    chunk,
    mapWithIndex,
  };
  