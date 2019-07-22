/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: 
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the 
original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
    let words = x.split(" ");
    let max = 0;
    let res = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let current = 0;
        for (let j = 0; j < word.length; j++) {
            current += word.charCodeAt(j) - 96;
        }
        if (current > max) {
            max = current;
            res = word;
        }
    }
    return res;
}
