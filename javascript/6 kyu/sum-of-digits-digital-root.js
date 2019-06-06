/* In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. 
Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
This is only applicable to the natural numbers. */

function digital_root(n) {
    var sum = 0;
    var numbers = n
        .toString()
        .split("")
        .map(function(str) {
            return parseInt(str);
        });
    while (numbers.length > 1) {
        sum = numbers.reduce((a, b) => a + b);
        numbers = sum
            .toString()
            .split("")
            .map(function(str) {
                return parseInt(str);
            });
    }
    return sum;
}
