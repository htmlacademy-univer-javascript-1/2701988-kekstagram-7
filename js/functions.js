function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// Примеры использования:
console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false

function isPalindrome(string){
  const normalizedString = string.toLowerCase().replaceAll(' ','');
  let reversedString = '';
  for (let char=normalizedString.length - 1; char>=0;char-=1){
    reversedString += normalizedString[char];
  }
  return normalizedString === reversedString;
}

// Строка является палиндромом
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
console.log(isPalindrome('Кекс'));  // false
// Это палиндром
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

