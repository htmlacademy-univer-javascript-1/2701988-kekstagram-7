/* eslint-disable no-unused-vars */

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}

function extractNumber(value) {
  const string = value.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const char = parseInt(string[i], 10);
    if (!Number.isNaN(char)) {
      result += string[i];
    }
  }

  return result === '' ? NaN : parseInt(result, 10);
}
