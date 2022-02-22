/* 
You will receive 3 parameters (string, char, string).
The first string will be a word with a missing char replaced with an underscore '_'.
You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.
If they are equals, you should print "Matched", otherwise print "Not Matched".

Input
'Str_ng', 'I', 'Strong'
Output
Not Matched

Input
'Str_ng', 'i', 'String'
Output
Matched

*/


function solve(str, char, result) {
  let res = str.replace("_", char);
  let output = res === result? "Matched" : "Not Matched"
  console.log(output)
}

solve('Str_ng', 'i', 'String')