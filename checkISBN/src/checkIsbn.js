function checkISBN (isbnNumber) {
  function validControlDigit (isbnDigits) {
    const digitControl = isbnDigits.pop()
    const multipliedNumbers = isbnDigits.map((num, index) => num * (index + 1))
    const sum = multipliedNumbers.reduce((acc, num) => acc + num, 0)
    let calculatedDigitNumber = sum % 11
    if (calculatedDigitNumber === 10) calculatedDigitNumber = 'X'
    return calculatedDigitNumber === digitControl
  }

  if (!isbnNumber) return false
  isbnNumber = isbnNumber.replace(/-|\s/g, '')
  if (isbnNumber.length != 10) return false
  var aDigitsIsbn = isbnNumber.split('').map((char, index) => {
    char = char.toUpperCase()
    if (index + 1 === 10 && char === 'X') return char
    else return Number(char)
  })
  if (aDigitsIsbn.some(char => char === NaN)) return false
  return validControlDigit(aDigitsIsbn)
}
