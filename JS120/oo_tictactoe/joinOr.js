/* obj is the context for `joinOr`; replace it with the correct context.
obj.joinOr([1, 2])                   //# => "1 or 2"
obj.joinOr([1, 2, 3])                //# => "1, 2, or 3"
obj.joinOr([1, 2, 3], '; ')          //# => "1; 2; or 3"
obj.joinOr([1, 2, 3], ', ', 'and')   //# => "1, 2, and 3"

- obj.joinOr(choices);
- obj.joinOr(choices, separator);
- obj.joinOr(choices, separator, conjunction);


input: array
output: string
rules:
- default separator is a comma ', '
- default conjunction is the word 'or'
- If array contains one element, return that element
- if two elements, separate them with "or"
- if more than three elements, insert conjunction before last element and use
separators between elements

E: [1, 2, 3], ', ', 'and')   //# => "1, 2, and 3"

D: array and strings

A:
Default separator is ', '
Default conjunction is 'or'
If array length is 1, 
  - return the element as a string
Else if array length is 2
  - return the two elements separated by the conjunction
Else (three or more)
  - join all elements except the last one with the separator, save as result
  - append separator and the conjunction to the result
  - append a space and the last element to the result
  return the result

*/

function joinOr(choices, separator = ", ", conjunction = "or") {
  if (choices.length === 1) {
    return String(choices[0]);
  } else if (choices.length === 2) {
    return `${choices[0]} ${conjunction} ${choices[1]}`;
  } else {
    let lastChoice = choices[choices.length - 1];
    let result = choices.slice(0, -1).join(separator);
    return `${result}${separator}${conjunction} ${lastChoice}`;
  }
}

console.log(joinOr([1, 2, 3], ", ", "and"));
