const findMaxFromArrays = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2]; // Combine the two arrays
    // console.log(combinedArray);
    const maxNumber = Math.max(...combinedArray); // Find the maximum number
    return maxNumber;
};


const array1 = [3, 7, 1, 17];
const array2 = [5, 2, 4, 8];
console.log(findMaxFromArrays(array1, array2)); 
