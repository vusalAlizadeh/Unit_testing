//Arrays and filtering function

function arrayOfEvenNumbers(arr) {
  //   return arr.length === 0
  //     ? new Error('array is empty')
  //     : arr.filter(item => item % 2 !== 1);
  //             OR
  if (arr.length) {
    return arr.filter((item) => item % 2 !== 1);
  } else {
    throw new Error("array is empty");
  }
}

module.exports = arrayOfEvenNumbers;
