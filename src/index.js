module.exports = function toReadable(number) {
  // Arrays containing English words for single, teen, and round numbers
  const singleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const roundNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred'; // Word for hundred

  // Split the number into an array of digits
  const arrayNum = ('' + number).split('');

  // If the number is a single digit (0-9)
  if (arrayNum.length === 1) {
    return singleNumbers[arrayNum[0]]; // Return the corresponding word from singleNumbers
  }

  // If the number is two digits (10-99)
  if (arrayNum.length === 2) {

    // For numbers between 10 and 19
    if (number < 20) {
      return teenNumbers[number - 10]; // Return the corresponding teen number
    }
    // For numbers between 20 and 99
    else if (number >= 20) {

      // If the second digit is 0 (e.g., 20, 30, 40, etc.)
      if (arrayNum[1] === '0') {
        return roundNumbers[(arrayNum[0] - 2)]; // Return the corresponding round number
      }

      // If the second digit is not 0 (e.g., 21, 35, 49, etc.)
      else {
        return roundNumbers[(arrayNum[0] - 2)] + ' ' + singleNumbers[arrayNum[1]]; // Combine the round number and single digit
      }
    }
  }

  // If the number is three digits (100-999)
  if (arrayNum.length === 3) {

    // If the second digit is 0
    if (arrayNum[1] === '0') {

      // If the third digit is also 0 (e.g., 100, 200, 300, etc.)
      if (arrayNum[2] === '0') {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred; // Return "X hundred"
      }

      // If the third digit is not 0 (e.g., 101, 206, 309, etc.)
      else {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + singleNumbers[arrayNum[2]]; // Return "X hundred Y"
      }
    }

    // If the second digit is 1 (e.g., 110, 215, 319, etc.)
    else if (arrayNum[1] === '1') {
      return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + teenNumbers[arrayNum[2]]; // Return "X hundred teen number"
    }

    // If the second digit is greater than 1 (e.g., 120, 235, 349, etc.)
    else {

      // If the third digit is 0 (e.g., 120, 230, 340, etc.)
      if (arrayNum[2] === '0') {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + roundNumbers[(arrayNum[1] - 2)]; // Return "X hundred round number"
      }

      // If the third digit is not 0 (e.g., 121, 235, 349, etc.)
      else {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + roundNumbers[(arrayNum[1] - 2)] + ' ' + singleNumbers[arrayNum[2]]; // Return "X hundred round number Y"
      }
    }
  }
}
