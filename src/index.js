module.exports = function toReadable(number) {
  const singleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const roundNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const hundred = 'hundred'
  const arrayNum = ('' + number).split('');

  if (arrayNum.length === 1) {  // if 0 <= number <= 9
    return singleNumbers[arrayNum[0]]
  }

  if (arrayNum.length === 2) {  // if 10 <= number <= 99

    // if 10 <= number <= 19
    if (number < 20) {
      return teenNumbers[number - 10]
    }
    // if 20 <= number <= 99
    else if (number >= 20) {

      // if second digit is 0
      if (arrayNum[1] === '0') {
        return roundNumbers[(arrayNum[0] - 2)]
      }

      // if 1 <= second digit <= 9
      else {
        return roundNumbers[(arrayNum[0] - 2)] + ' ' + singleNumbers[arrayNum[1]]
      }
    }
  }

  if (arrayNum.length === 3) {  // if 100 <= number <= 999

    // if second digit is 0
    if (arrayNum[1] === '0') {

      // if third digit is 0
      if (arrayNum[2] === '0') {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred
      }

      // if 1 <= third digit <= 9
      else {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + singleNumbers[arrayNum[2]]
      }
    }

    // if second digit is 1
    else if (arrayNum[1] === '1') {
      return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + teenNumbers[arrayNum[2]]
    }

    // if second digit is more than 1
    else {

      // if third digit is 0
      if (arrayNum[2] === '0') {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + roundNumbers[(arrayNum[1] - 2)]
      }

      // if 1 <= third digit <= 9
      else {
        return singleNumbers[(arrayNum[0])] + ' ' + hundred + ' ' + roundNumbers[(arrayNum[1] - 2)] + ' ' + singleNumbers[arrayNum[2]]
      }
    }
  }
}