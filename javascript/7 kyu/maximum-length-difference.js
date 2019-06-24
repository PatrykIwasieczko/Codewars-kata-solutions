/* You are given two arrays a1 and a2 of strings. Each string is composed with letters 
from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) 
where you will return Nothing (None).

#Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", 
"znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:

    input : 2 strings with substrings separated by ,
    output: number as a string

*/

function mxdiflg(a1, a2) {
    let a1a = [];
    let a2a = [];
    for (str of a1) {
        a1a.push(str.length);
    }
    for (str of a2) {
        a2a.push(str.length);
    }
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }
    return Math.max(
        Math.abs(Math.max(...a1a) - Math.min(...a2a)),
        Math.abs(Math.min(...a1a) - Math.max(...a2a))
    );
}
