/* Number to Words (Intermediate)
Create a function numberToWords that converts a positive integer (up to 999) into its word representation. For example, 123 should become "one hundred twenty three".
input: integer
output: string
rules:
- return the string version in english of the input integer

E: 123 is one hundred twenty three

D: int and strings, use an array to store word version of common english number words

A:
Create objects of common number words
  - ones: one to nine
  - teens: ten, eleven, twelve
  - tens: twenty, thirty ... ninety


Convert input int to string digit
Iterate over the string digit from the end
  if the first string digit from the end [length - 1] is not zero, 
    - check its word value against the ones object
    - append value to wordDigit var (array)
  if there is a string digit at length - 2 and it is not zero 
    - if the string digit is greater than 1
      - check its word value against the teens object
      - append value to wordDigit var 
    - else append "ten" to wordDigit  

  if there is a string digit at length - 3 and it is not zero
    - check its word value against the hundreds object
    - append value to wordDigit var 
Return wordDigit    



 
100 => 0, 0, 1 => one hundred
505  => 5, 0, 5 => five, five hundred = reverse five hundred five
*/

const ONES = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const TEENS = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const TENS = {
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

function numberToWords(number) {
  // handle single digits
  if (number < 10) {
    return ONES[number];
  }
  // handle teens
  if (number >= 10 && number < 20) {
    if (number === 10) return "ten";
    return TEENS[number];
  }

  //handle tens (20 - 99)
  if (number > 19 && number < 100) {
    let tensDigit = Math.floor(number / 10);
    let onesDigit = number % 10;

    if (onesDigit === 0) {
      return TENS[tensDigit * 10];
    } else {
      return TENS[tensDigit * 10] + " " + ONES[onesDigit];
    }
  }

  // handle hundreds (100 - 999)
  if (number >= 100) {
    let hundredsDigit = Math.floor(number / 100);
    let remainder = number % 100;

    if (remainder === 0) {
      return ONES[hundredsDigit] + " hundred";
    } else if (remainder < 10) {
      return ONES[hundredsDigit] + " hundred " + ONES[remainder];
    } else if (remainder >= 10 && remainder < 20) {
      if (remainder === 10) {
        return ONES[hundredsDigit] + " hundred ten";
      }
      return ONES[hundredsDigit] + " hundred " + TEENS[remainder];
    } else {
      let tensDigit = Math.floor(remainder / 10);
      let onesDigit = remainder % 10;

      if (onesDigit === 0) {
        return ONES[hundredsDigit] + " hundred " + TENS[tensDigit * 10];
      } else {
        return (
          ONES[hundredsDigit] +
          " hundred " +
          TENS[tensDigit * 10] +
          " " +
          ONES[onesDigit]
        );
      }
    }
  }
}

const p = console.log;

p(numberToWords(1) === "one");
p(numberToWords(10) === "ten");
p(numberToWords(21) === "twenty one");
p(numberToWords(123) === "one hundred twenty three");
p(numberToWords(999) === "nine hundred ninety nine");
p(numberToWords(100) === "one hundred");
p(numberToWords(505) === "five hundred five");
